import { StatusBar } from "expo-status-bar";

import Navigation from "./navigation";

import { Provider } from "./context";

export default function App() {
  return (
    <Provider>
      <Navigation />
      <StatusBar />
    </Provider>
  );
}
