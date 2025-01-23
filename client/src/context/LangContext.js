import React, { createContext, useState } from "react";

export const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("az");
  return (
    <LangContext.Provider value={{ changeLang: setLang, lang }}>
      {children}
    </LangContext.Provider>
  );
};
