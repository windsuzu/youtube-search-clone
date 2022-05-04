type Props = {
    videoId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnailUrl: string;
    title: string;
};

const Video = ({
    videoId,
    channelTitle,
    description,
    publishedAt,
    thumbnailUrl,
    title,
}: Props) => {
    const time = new Date(publishedAt).toLocaleString([]);
    return (
        <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex cursor-pointer text-[#aaaaaa] group">
                {/* Thumbnail */}
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="group-hover:scale-95 transition ease-out duration-150"
                />

                {/* Description */}
                <div className="flex flex-col p-4 pt-0">
                    <h1 className="text-white text-lg">{title}</h1>
                    <p className="text-xs">{time}</p>
                    <p className="text-sm py-4">{channelTitle}</p>
                    <p className="text-xs">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default Video;
