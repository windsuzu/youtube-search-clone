type Props = {
    className?: string;
};

const Profile = ({ className }: Props) => {
    return (
        <div className={`${className}`}>
            <img
                src="https://i.pravatar.cc/300"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full shadow-lg cursor-pointer"
            />
        </div>
    );
};

export default Profile;
