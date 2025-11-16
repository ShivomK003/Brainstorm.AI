import { configureStore } from "@reduxjs/toolkit";
import { countriesDialCodeApi } from "./services/countriesDialCode";

export function makeStore() {
  const store = configureStore({
    reducer: {
      [countriesDialCodeApi.reducerPath]: countriesDialCodeApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(countriesDialCodeApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
