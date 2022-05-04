import { useState, useEffect, useRef } from "react";
import { Item } from "../interface/result";
import { fetchAPI } from "../lib/api";
import Video from "./video";

const Results = () => {
    let nextPageToken = useRef<string | null>(null);
    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
        fetchAPI("Vaundy")
            .then((data) => {
                setData(data!.items);
                nextPageToken.current = data!.nextPageToken;
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="bg-primary w-[70%] min-h-screen pt-24 pl-24">
            {data.map((item) => (
                <div key={item.id.videoId} className="p-1 m-4">
                    <Video
                        videoId={item.id.videoId || ""}
                        channelTitle={item.snippet.channelTitle}
                        description={item.snippet.description}
                        publishedAt={item.snippet.publishedAt}
                        thumbnailUrl={item.snippet.thumbnails.medium.url}
                        title={item.snippet.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Results;
