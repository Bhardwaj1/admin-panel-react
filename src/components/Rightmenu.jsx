// RightMenu.js
import React from 'react';
import { FaBug,  FaBell ,FaRegUser} from 'react-icons/fa';
import { BsBroadcast } from "react-icons/bs"

const notifications = [
  { id: 1, message: "You have a bug that needs...", time: "Just now" ,icon:<FaBug/>,bg:"#E3F5FF"},
  { id: 2, message: "New user registered", time: "59 minutes ago" ,icon:<FaRegUser />,bg:"#E5ECF6" },
  { id: 3, message: "You have a bug that needs...", time: "12 hours ago" ,icon:<FaBug/> ,bg:"#E3F5FF"},
  { id: 4, message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" ,icon:<BsBroadcast />,bg:"#E5ECF6"},
];

const activities = [
  { id: 1, message: "You have a bug that needs...", time: "Just now", icon: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, message: "Released a new version", time: "59 minutes ago", icon: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 3, message: "Submitted a bug", time: "12 hours ago", icon: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 4, message: "Modified a data in Page X", time: "Today, 11:59 AM", icon: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 5, message: "Deleted a page in Project X", time: "Feb 2, 2023", icon: "https://randomuser.me/api/portraits/women/1.jpg" },
];

const contacts = [
  { id: 1, name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 3, name: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 4, name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 5, name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 6, name: "Koray Okumus", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
];

const RightMenu = () => {
  return (
    <div className="w-80 bg-white dark:bg-dark-main-bg border-l border-gray-200 dark:border-dark-border p-5 shadow-lg fixed right-0 top-0 bottom-0 overflow-y-auto">
      {/* Notifications Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 dark:text-dark-text-title">Notifications</h3>
        <ul>
          {notifications.map((item) => (
            <li key={item.id} className="flex  items-center space-x-2 mb-3">
              <span className="text-lg rounded-lg" style={{backgroundColor:item.bg,padding:3}}>{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-dark-text-title">{item.message}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 dark:text-dark-text-title">Activities</h3>
        <ul>
          {activities.map((item) => (
            <li key={item.id} className="flex items-start space-x-2 mb-3">
              <img src={item.icon} alt={item.message} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-dark-text-title">{item.message}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 dark:text-dark-text-title">Contacts</h3>
        <ul>
          {contacts.map((item) => (
            <li key={item.id} className="flex items-center space-x-2 mb-3">
              <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full" />
              <span className="text-sm text-gray-700 dark:text-dark-text-title">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightMenu;
