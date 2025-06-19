import Image from "next/image";

const menuItems = [
    {
        icon: "/icons/password.png",
        label: "Change Password",
    },
    {
        icon: "/icons/log.png",
        label: "Logout",
    },
];

export default function ProfileMenu() {
    return (
        <div className="w-52 rounded-2xl overflow-hidden shadow bg-white font-sans">
            {/* Profile Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b">
                <Image src="/icons/prof.png" alt="Profile Icon" width={16} height={16} />
                <span className="text-[#6F0C15] font-medium text-base">Profile</span>
            </div>
            {/* Menu Items */}
            <div className="bg-[#6F0C15] py-2 flex flex-col gap-1">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        className="flex items-center w-full px-4 py-2 gap-3 text-white cursor-pointer"
                    >
                        <Image src={item.icon} alt={`${item.label} Icon`} width={16} height={16} />
                        <span className="text-sm font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
