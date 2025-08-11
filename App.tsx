 

import { StatusBar } from "react-native";

import Router from "./src/navigation/Router";

export default function App() {
  return (
    <>
      <Router />
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
    </>
  );
}

