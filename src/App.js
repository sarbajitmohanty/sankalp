import "./App.css";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./scenes/Home";
import Layout from "./scenes/Layout";
import Events from "scenes/Events";
import Team from "scenes/Team";
import Sponsers from "scenes/Sponsers";
import About from "scenes/About";
import Contact from "scenes/Contact";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div
      className="app"
      // style={{
      //   backgroundImage: `url(${
      //     process.env.PUBLIC_URL + "/img/background.png"
      //   })`,
      // }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
              <Route path="/sponsers" element={<Sponsers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
