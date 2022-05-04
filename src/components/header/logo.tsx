import { useNavigate } from "react-router-dom";

type Props = {
    className?: string;
};

const Logo = ({ className }: Props) => {
    const imagePath = process.env.PUBLIC_URL + "/images";
    const navigate = useNavigate();

    return (
        <img
            src={`${imagePath}/dark.webp`}
            alt="Logo"
            className={`w-24 cursor-pointer ${className}`}
            onClick={() => {
                navigate("/");
            }}
        />
    );
};

export default Logo;
