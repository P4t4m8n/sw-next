import React from "react";
import { useEntity } from "simpler-state";
import { theme, toggleTheme } from "./theme.store";
import { EmpireThemeSvg, RebellionThemeSvg } from "../SVGs/svg.service";

export const ThemeButton = () => {
  const currTheme = useEntity(theme);
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {currTheme === "empire" ? <EmpireThemeSvg /> : <RebellionThemeSvg />}
    </button>
  );
};
