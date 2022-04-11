import { FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const onToggleTheme = () => {
    console.log("switching theme...");
  };
  return (
    <a
      className="border-black/5 bg-white/20 hover:bg-white/40 border rounded-full p-3 hover:cursor-pointer hover:border-black/20"
      onClick={onToggleTheme}
    >
      <li className="font-display text-sm text-gray-800">
        <FiMoon />
      </li>
    </a>
  );
};
