import Image from "next/image";
import { IoLogoReact, IoCalculator,IoTimerOutline } from "react-icons/io5";
import { SidebarMenuItem } from ".";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoTimerOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contandor Client Side",
  },{
    path: "/dashboard/pokemon",
    icon: <IoCalculator size={40} />,
    title: "Pokemons",
    subTitle: "Generacion estática",
  },
];

const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="user avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Vcontreras</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem) => (
          <SidebarMenuItem key={menuItem.title} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
