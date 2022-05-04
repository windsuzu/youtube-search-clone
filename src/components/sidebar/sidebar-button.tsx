type Props = {
    icon: JSX.Element;
    label: string;
};

const SidebarButton = ({ icon, label }: Props) => {
    return (
        <button className="flex items-start justify-start space-x-8 hover:bg-[#4c4c4c] transition duration-200 ease-out pl-6 py-3 w-64">
            {icon}
            <p>{label}</p>
        </button>
    );
};

export default SidebarButton;
