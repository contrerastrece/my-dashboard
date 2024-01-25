"use client";
import { useCountStore } from "@/store";
import { SimpleWidget } from "..";
import { IoCartOutline } from "react-icons/io5";

export const WidgetGrid = () => {
  const name = useCountStore((state) => state.name);
  const count = useCountStore((state) => state.count);
  return (
    <div className="flex flex-wrap p-2 items-center gap-4 justify-center">
      <SimpleWidget
        label={name}
        title={`${count}`}
        subTitle="Productos en el carrito"
        href="/dashboard/counter"
        icon={<IoCartOutline size={40} className="text-blue-500"/>}
      />
      <SimpleWidget title="as" label="sdas" />
    </div>
  );
};
