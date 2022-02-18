import { Handler } from "@netlify/functions";
import { addDays } from "date-fns";
import { startDate, stopDate } from "../config";
import { connectMongo } from "../mongo-db";

export const handler: Handler = async (event, context) => {
    const db = await connectMongo();

    const dailyReport = db.collection("dailyReport");

    console.log("Format collection");

    await dailyReport.deleteMany({});

    const arrayInsert = [];

    let currentDay = startDate;
    while (currentDay.getTime() !== stopDate.getTime()) {
        arrayInsert.push({
            in: Math.floor(Math.random() * 1000 + 200),
            out: Math.floor(Math.random() * 1000),
            date: currentDay,
        });
        currentDay = addDays(currentDay, 1);
    }

    console.log("Inserting", arrayInsert.length, "items");

    await dailyReport.insertMany(arrayInsert);

    const result = await dailyReport.find().toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};
