import { useEffect, useState } from "react";

export const useDataApi = <T>({ from, to }: { from: Date; to: Date }) => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(
                    `/.netlify/functions/dashboard-data-api?from=${from}&to=${to}`
                );
                const resultArray = await result.json();

                const mappedDateArray = resultArray.map(
                    (row: any[], index: number) => {
                        if (index === 0) {
                            return row;
                        } else {
                            return [new Date(row[0]), row[1], row[2], row[3]];
                        }
                    }
                );

                setData(mappedDateArray);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [from, to]);

    return [data, isLoading, isError] as [T, boolean, boolean];
};
