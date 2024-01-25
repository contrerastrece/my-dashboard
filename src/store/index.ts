import { create } from "zustand";

interface CounterState{
  name:string,
  count:number;
  isReady:boolean;
  increase:(by:number)=>void;
  reset:()=>void;
  initCounterState:(value:number)=>void;
}

const initialState:CounterState={
  name:'Contador',
  count:5,
  isReady:false,
  increase:()=>{},
  reset:()=>{},
  initCounterState:()=>{}
}

export const useCountStore=create<CounterState>((set,get)=>({
  ...initialState,  
  initCounterState:(value)=>set((state)=>({...state,count:value,isReady:true})),
  increase: (by) => set((state) => ({ ...state,count: state.count + by })) ,
  reset: () => set(() => (initialState)) ,
}))