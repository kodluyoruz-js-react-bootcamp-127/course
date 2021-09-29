import { useContext } from "react";

export default function useLogin() {
  const { theme, toggleTheme } = useContext(ThemeContex);

  return { theme, toggleTheme };
}
