import { RefreshIcon } from "@heroicons/react/outline";

const LoadingIndicator = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 text-white">
                <RefreshIcon />
            </div>
        </div>
    );
};

export default LoadingIndicator;
