import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    className?: string;
};

const Searchbar = ({ className }: Props) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const clearQuery = () => {
        setQuery("");
    };

    const submitQuery = () => {
        if (query !== "") navigate(`?query=${query}`);
    };

    const handleSearchButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        submitQuery();
    };

    const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") submitQuery();
    };

    return (
        <div className={`${className}`}>
            <div className="relative">
                <input
                    type="text"
                    className="text-white text-sm bg-primary h-[42px] px-4 pr-8 md:pr-32 outline-none border border-[#313131] border-r-0 rounded-l-sm focus:border-[#1c62b9] focus:border-r"
                    placeholder="搜尋"
                    value={query}
                    onChange={handleQueryChange}
                    onKeyDown={handleInputEnter}
                />
                {query.length > 0 && (
                    <button
                        className="absolute right-0 top-0 mt-[11px] mr-2"
                        onClick={clearQuery}
                    >
                        <XIcon className="w-5 h-5 fill-current" />
                    </button>
                )}
            </div>
            <button
                className="px-6 py-2 bg-[#313131] rounded-r-sm border border-[#313131] border-l-0"
                onClick={handleSearchButtonClick}
            >
                <SearchIcon className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default Searchbar;
