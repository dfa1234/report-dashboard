import { Handler } from "@netlify/functions";
import { startDate, stopDate } from "../config";
import { DailyReport } from "../DailyReport";
import { connectMongo } from "../mongo-db";

export const handler: Handler = async (event, context) => {
    const {
        limit = "210",
        from = startDate,
        to = stopDate,
    } = event.queryStringParameters;

    const limitParsed = parseInt(limit);
    const fromParsed = new Date(from);
    const toParsed = new Date(to);

    const db = await connectMongo();

    const dailyReport = db.collection("dailyReport");

    const result = (await dailyReport
        .find({ date: { $gte: fromParsed, $lt: toParsed } })
        .limit(limitParsed)
        .toArray()) as any as DailyReport[];

    const mappedResult: any[][] = result.map((dailyReport) => [
        dailyReport.date,
        dailyReport.in,
        dailyReport.out,
        // We could choose to save some bandwith and do not send the average like this in the payload,
        // but on the other hand it could also result in some more calculation for the client.
        // It's not a concern for the small amount of data we have here,
        // but it would be an interesting debate if the calculation was intensive, and the data set was huge
        dailyReport.in - dailyReport.out,
    ]);

    mappedResult.unshift(["Date", "Incomes", "Outcomes", "Revenues"]);

    return {
        statusCode: 200,
        body: JSON.stringify(mappedResult),
    };
};
