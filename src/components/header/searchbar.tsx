import { SearchIcon } from "@heroicons/react/outline";

type Props = {
    className?: string;
};

const Searchbar = ({ className }: Props) => {
    return (
        <div className={`${className}`}>
            <input
                type="text"
                className="text-white bg-primary p-2 block w-full outline-none border border-[#313131] border-r-0 rounded-l-sm focus:border-[#1c62b9] focus:border-r"
                placeholder="搜尋"
            />
            <button className="px-6 py-2 bg-[#313131] rounded-r-sm border border-[#313131] border-l-0">
                <SearchIcon className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default Searchbar;
