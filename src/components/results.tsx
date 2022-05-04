import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import LoadingIndicator from "./loading-indicator";
import Message from "./message";
import Video from "./video";
import InfiniteScroll from "react-infinite-scroller";

const Results = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const [query, setQuery] = useState<string>(params.get("query") || "");

    const [data, isLoading, error, hasMore, loadMore, clearData] =
        useQuery(query);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get("query");

        if (query === null) {
            clearData();
            return;
        }

        setQuery(query);
    }, [location, clearData]);

    return (
        <div className="bg-primary md:w-[70%] h-screen overflow-y-scroll scrollbar-hide pt-24 px-8 md:pl-24 flex flex-col items-center">
            {isLoading && <LoadingIndicator />}

            {!isLoading && error !== null && (
                <Message
                    title="錯誤發生"
                    message={`有錯誤發生，可能的原因為 (${error.message})`}
                />
            )}
            {!isLoading && !error && data.length === 0 && (
                <Message
                    title="你還沒有進行任何搜尋"
                    message="請使用上方搜尋欄查詢你想要的影片!"
                />
            )}
            {!isLoading && !error && data.length > 0 && (
                <InfiniteScroll
                    pageStart={0}
                    hasMore={hasMore}
                    loadMore={loadMore}
                    loader={<LoadingIndicator key={0} />}
                    useWindow={false}
                >
                    {data.map((item, i) => (
                        <div
                            key={`${i}${item.id.videoId || ""}`}
                            className="pt-8 md:pt-0 md:p-1 md:m-4"
                        >
                            <Video
                                videoId={item.id.videoId || ""}
                                channelTitle={item.snippet.channelTitle}
                                description={item.snippet.description}
                                publishedAt={item.snippet.publishedAt}
                                thumbnailUrl={
                                    item.snippet.thumbnails.medium.url
                                }
                                title={item.snippet.title}
                            />
                        </div>
                    ))}
                </InfiniteScroll>
            )}
        </div>
    );
};

export default Results;
