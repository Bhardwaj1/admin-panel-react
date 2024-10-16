import { assets } from "../assests";

export const dashboardSidebarMenues = [
  {
    id: 1,
    title: "Default",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].ChartPieSlice,
    shouldExpand: false,
  },
  {
    id: 2,
    title: "eCommerce",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].ShoppingBagOpen,
    shouldExpand: true,
  },
  {
    id: 3,
    title: "Projects",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].FolderNotch,
    shouldExpand: true,
  },
  {
    id: 4,
    title: "Online Courses",
    icon: (isDarkMode) => assets.icons[isDarkMode ? "dark" : "light"].BookOpen,
    shouldExpand: true,
  },
];

export const pagesSidebarMenues = [
  {
    id: 1,
    title: "User Profile",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].IdentificationBadge,
    shouldExpand: true,
    subItems: [
      { id: 1, title: "Overview", href: "/" },
      { id: 2, title: "Projects", href: "/" },
      { id: 3, title: "Campaigns", href: "/" },
      { id: 4, title: "Documents", href: "/" },
      { id: 5, title: "Followers", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Account",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].IdentificationCard,
    shouldExpand: true,
  },
  {
    id: 3,
    title: "Corporate",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].FolderNotch,
    shouldExpand: true,
  },
  {
    id: 4,
    title: "Blog",
    icon: (isDarkMode) => assets.icons[isDarkMode ? "dark" : "light"].Notebook,
    shouldExpand: true,
  },
  {
    id: 5,
    title: "Social",
    icon: (isDarkMode) =>
      assets.icons[isDarkMode ? "dark" : "light"].ChatsTeardrop,
    shouldExpand: true,
  },
];
