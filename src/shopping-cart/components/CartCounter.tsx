"use client";
import { useCountStore } from "@/store";
import { useEffect } from "react";

interface Props {
  value: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  console.log(data)
  return data;
};

const CartCounter = ({ value }: Props) => {
  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  const initCounterState = useCountStore((state) => state.initCounterState);

  const handleIncrease = (by: number) => {
    increase(by);
  };

  useEffect(() => {
   getApiCounter().then(({count})=>initCounterState(count));
  }, [initCounterState,count]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleIncrease(+1)}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleIncrease(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
