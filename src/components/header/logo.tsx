type Props = {
    className?: string;
};

const Logo = ({ className }: Props) => {
    const imagePath = process.env.PUBLIC_URL + "/images";
    return (
        <img
            src={`${imagePath}/dark.webp`}
            alt="Logo"
            className={`w-24 cursor-pointer ${className}`}
        />
    );
};

export default Logo;
