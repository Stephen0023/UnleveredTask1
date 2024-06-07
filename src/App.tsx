import React from "react";
import Home from "./pages/Home";
import "./App.css";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";
import Header from "./components/Header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header />
        <div className="App">
          <Home />
        </div>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
