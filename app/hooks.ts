import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();


//Now I can use this as 

// <---------------------Dispatch---------------> 

// const dispatch = useAppDispatch();  //imported from hooks.ts


//<---------------------useSelector--------------->

// const user = useAppSelector((state) => state.users.users);      //imported from hooks.ts
