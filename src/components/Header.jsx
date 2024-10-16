import React from "react";
import StarIcon from "../assests/images/Vector";
import SearchIcon from "../assests/images/search";
import { useTheme } from "../context/ThemeContext";
import DairyIcon from "../assests/images/DairyIcon";
import ThemeIcon from "../assests/images/ThemeIcon";
import ClockIcon from "../assests/images/clock";
import NotificationIcon from "../assests/images/Notification";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-4 dark:bg-dark-main-bg text-black dark:text-white">
      <div className="flex items-center gap-4">
        <div>
          <DairyIcon isDarkMode={isDarkMode} />
        </div>
        <div>
          <StarIcon isDarkMode={isDarkMode} />
        </div>
        <div className="flex items-center gap-2">
          <p className="dark:text-dark-text-disabled">Dashboards</p>
          <p className="dark:text-dark-text-disabled">/</p>
          <p>Default</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="bg-[#1C1C1C1A] dark:bg-dark-input-bg border rounded-lg border-none outline-none ring-0 px-3 pl-8 py-1.5"
            placeholder="Search"
          />
          <div className="absolute top-3 pl-2">
            <SearchIcon isDarkMode={isDarkMode} />
          </div>
        </div>
        {/* Dark Mode button  */}
        <button onClick={toggleTheme}>
          <ThemeIcon isDarkMode={isDarkMode} />
        </button>
        <div>
          {/* <img src={timeDuration} alt="Clock" className="cursor-pointer" /> */}
          <ClockIcon isDarkMode={isDarkMode} />
        </div>
        <div>
          <NotificationIcon isDarkMode={isDarkMode} />
        </div>
        <div>
          <DairyIcon isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Header;
