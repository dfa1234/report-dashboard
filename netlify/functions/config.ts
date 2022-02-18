import { parse } from "date-fns";

const now = new Date();

export const startDate = parse("2021-06-01", "yyyy-MM-dd", now);
export const stopDate = parse("2021-12-21", "yyyy-MM-dd", now);
