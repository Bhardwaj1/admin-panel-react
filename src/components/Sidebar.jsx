import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import profilepic from "../assests/images/ByeWind.svg";
import { useTheme } from "../context/ThemeContext";
import {
  dashboardSidebarMenues,
  pagesSidebarMenues,
} from "../data/sidebarData";

const Sidebar = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-64 max-h-screen overflow-auto border-r-2 dark:border-dark-border fixed top-0 left-0 z-10 flex flex-col gap-6">
      {/* Header */}
      <div className="text-center py-6 flex items-center gap-8 p-6">
        <img src={profilepic} alt="Profile Pic" className="w-10" />
        <p className="text-xl font-semibold dark:text-dark-text-title">
          ByeWind
        </p>
      </div>
      <div className="flex  justify-between px-8 ">
        <p className="text-xl text-[#1C1C1C66] dark:text-dark-text-body1">
          Favorites
        </p>
        <p className="text-xl text-[#1C1C1C33] dark:text-dark-text-disabled">
          Recently
        </p>
      </div>
      <div className="px-8">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>{" "}
            {/* Custom gray bullet */}
            <span className="dark:text-dark-text-title">Overview</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>{" "}
            {/* Custom gray bullet */}
            <span className="dark:text-dark-text-title">Projects</span>
          </li>
        </ul>
      </div>
      <div className="space-y-4 px-4">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
          <p className="text-xl text-[#1C1C1C66] dark:text-dark-text-body1">
            Dashboards
          </p>
        </button>
        <div className="dark:text-dark-text-title">
          <ul className="space-y-4 px-4">
            {dashboardSidebarMenues.map((item) => (
              <li key={item.id}>
                <MenuItem
                  title={item.title}
                  shouldExpand={item.shouldExpand}
                  icon={item.icon(isDarkMode)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4 px-4 dark:text-dark-text-title">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
          <p className="text-xl text-[#1C1C1C66] dark:text-dark-text-body1">
            Pages
          </p>
        </button>
        <ul className="space-y-4 px-4">
          {pagesSidebarMenues.map((item) => (
            <li key={item.id}>
              <MenuItem
                title={item.title}
                shouldExpand={item.shouldExpand}
                icon={item.icon(isDarkMode)}
                subItems={item?.subItems}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

function MenuItem({ shouldExpand = true, icon, title, subItems }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button className="flex items-center gap-4" onClick={toggleExpansion}>
        {shouldExpand && (
          <span className="ml-auto">
            {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        )}
        <img src={icon} alt="Icon" />
        <NavLink to="/" className="block py-1">
          {title}
        </NavLink>
      </button>

      {isExpanded && subItems && subItems.length > 0 && (
        <ul className="pl-8 space-y-3 ml-4 pt-2">
          {subItems?.map((item) => (
            <li className="flex items-center gap-4" key={item?.id}>
              <NavLink to="/">{item?.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
