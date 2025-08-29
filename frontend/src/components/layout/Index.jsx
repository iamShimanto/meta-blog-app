import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BlogProvider } from "../../context/BlogContext";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BlogProvider>
          <Navbar />
          <main className={`${darkMode ? "darkMode" : ""}`}>
            <Outlet />
          </main>
          <Footer />
        </BlogProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
