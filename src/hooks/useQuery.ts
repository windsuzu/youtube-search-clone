import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "../lib/api";

import { Item } from "../interface/result";
const useQuery = (
    query: string
): [
    data: Item[],
    isLoading: boolean,
    error: Error | null,
    hasMore: boolean,
    loadMore: () => void,
    clearData: () => void
] => {
    const [data, setData] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [nextPageToken, setNextPageToken] = useState<string>("");
    const hasMore = nextPageToken !== "";

    // first case: new query comes in and the old query result already exists
    useEffect(() => {
        if (query === "") return;
        setData([]);
        setIsLoading(true);
        setError(null);

        fetchAPI(query)
            .then((data) => {
                setData(data?.items || []);
                setNextPageToken(data?.nextPageToken || "");
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [query]);

    // second case: still in the same query, but the nextPageToken changes
    const loadMore = () => {
        if (hasMore) {
            fetchAPI(query, nextPageToken)
                .then((data) => {
                    setData((prevData) => [
                        ...prevData,
                        ...(data?.items || []),
                    ]);
                    setNextPageToken(data?.nextPageToken || "");
                })
                .catch((error) => setError(error));
        }
    };

    const clearData = useCallback(() => {
        setData([]);
        setError(null);
        setIsLoading(false);
        setNextPageToken("");
    }, []);

    return [data, isLoading, error, hasMore, loadMore, clearData];
};

export default useQuery;
