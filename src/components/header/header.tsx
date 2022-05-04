import Logo from "./logo";
import Searchbar from "./searchbar";
import Profile from "./profile";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full text-white grid grid-cols-1 md:grid-cols-3 items-center bg-secondary p-4">
            <Logo className="pl-4 hidden md:flex" />
            <Searchbar className="flex justify-center items-center" />
            <Profile className="hidden md:flex justify-end pr-4" />
        </div>
    );
};

export default Header;
