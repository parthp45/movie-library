"use client";

import { Provider } from "react-redux";
import appStore from "../src/utills/appStore";

export default function Providers({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
