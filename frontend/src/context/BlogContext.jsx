import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <BlogContext.Provider value={{ searchTerm, setsearchTerm }}>
      {children}
    </BlogContext.Provider>
  );
};
