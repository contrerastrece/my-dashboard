import { WidgetGrid } from "@/components";
import React from "react";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">DashBoard</h1>
      <span className="text-xl">Información General</span>

      <WidgetGrid/>
    </div>
  );
};

export default MainPage;
