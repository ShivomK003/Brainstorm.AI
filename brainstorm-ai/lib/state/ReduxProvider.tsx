"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<ReturnType<typeof makeStore>>(makeStore());
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
