import {
    ArchiveIcon,
    ChartSquareBarIcon,
    ClockIcon,
    GlobeIcon,
    HomeIcon,
    LightningBoltIcon,
    PauseIcon,
    PlayIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
    return (
        <div className="bg-secondary hidden md:inline-block text-white pt-24 h-screen">
            <div className="flex flex-col">
                <SidebarButton
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="首頁"
                />
                <SidebarButton
                    icon={<GlobeIcon className="w-6 h-6" />}
                    label="探索"
                />
                <SidebarButton
                    icon={<LightningBoltIcon className="w-6 h-6" />}
                    label="Shorts"
                />
                <SidebarButton
                    icon={<ChartSquareBarIcon className="w-6 h-6" />}
                    label="訂閱內容"
                />
            </div>
            <hr className="border-t-[0.1px] border-gray-600 opacity-60 m-4" />

            <div className="flex flex-col">
                <SidebarButton
                    icon={<ArchiveIcon className="w-6 h-6" />}
                    label="媒體庫"
                />
                <SidebarButton
                    icon={<ClockIcon className="w-6 h-6" />}
                    label="觀看記錄"
                />
                <SidebarButton
                    icon={<PlayIcon className="w-6 h-6" />}
                    label="你的影片"
                />
                <SidebarButton
                    icon={<PauseIcon className="w-6 h-6" />}
                    label="稍後觀看"
                />
                <SidebarButton
                    icon={<ThumbUpIcon className="w-6 h-6" />}
                    label="喜歡的影片"
                />
            </div>
        </div>
    );
};

export default Sidebar;
