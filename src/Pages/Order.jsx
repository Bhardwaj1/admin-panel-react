import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy, useRowSelect } from "react-table";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Order.css";
import Pagination from "./Pagination";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";

const columns = [
  {
    Header: "Order ID",
    accessor: "orderId",
  },
  {
    Header: "User",
    accessor: "user",
    Cell: ({ row: { original } }) => (
      <div className="user-cell">
        <img src={original.avatar} alt={original.user} className="avatar" />
        <Typography>{original.user}</Typography>
      </div>
    ),
  },
  {
    Header: "Project",
    accessor: "project",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <CalendarTodayIcon
          style={{ fontSize: "1.2rem", marginRight: "0.5rem", color: "grey" }}
        />
        <Typography>{new Date(value).toDateString()}</Typography>
      </div>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      let color = "";
      if (value === "In Progress") color = "purple";
      if (value === "Complete") color = "green";
      if (value === "Pending") color = "blue";
      if (value === "Approved") color = "yellow";
      if (value === "Rejected") color = "red";
      return <Typography style={{ color }}>{value}</Typography>;
    },
  },
  {
    Header: "",
    id: "actions",
    Cell: () => {
      const { isDarkMode } = useTheme();

      return (
        <IconButton>
          <MoreVertIcon style={{ color: isDarkMode ? "white" : "black" }} />
        </IconButton>
      );
    },
  },
];

const data = [
  {
    orderId: "#CM9801",
    user: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: new Date(),
    status: "In Progress",
  },
  {
    orderId: "#CM9802",
    user: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: new Date(),
    status: "Complete",
  },
  {
    orderId: "#CM9803",
    user: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: new Date(),
    status: "Pending",
  },
  {
    orderId: "#CM9804",
    user: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: new Date("2023-10-09"),
    status: "Approved",
  },
  {
    orderId: "#CM9805",
    user: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: new Date("2023-02-02"),
    status: "Rejected",
  },
  // Add more sample data as needed
];

const Order = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { selectedFlatRows },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Default page index
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox
              {...getToggleAllRowsSelectedProps()}
              sx={{
                color: isDarkMode ? "white" : "black", // Set the default border color
                "&.Mui-checked": {
                  color: isDarkMode ? "#C6C7F8" : "black", // Set the checked color based on dark mode
                },
                "& .MuiSvgIcon-root": {
                  fill: isDarkMode ? "white" : "black", // Override the checkbox icon color
                },
              }}
            />
          ),
          Cell: ({ row }) => (
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              sx={{
                color: isDarkMode ? "white" : "black", // Set the default border color
                "&.Mui-checked": {
                  color: isDarkMode ? "#C6C7F8" : "black", // Set the checked color based on dark mode
                },
                "& .MuiSvgIcon-root": {
                  fill: isDarkMode ? "white" : "black", // Override the checkbox icon color
                },
              }}
            />
          ),
        },
        ...columns,
      ]);
    }
  );

  // Handle row selection and store selected rows in state
  useEffect(() => {
    setSelectedRows(selectedFlatRows?.map((row) => row.original));
  }, [selectedFlatRows]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="custom-container dark:bg-dark-border">
        <div className="left-icons ">
          <button className="icon-button w-10">
            <AddIcon className="text-2xl dark:text-white" />
          </button>
          <button className="icon-button w-10 dark:text-white">
            <FilterListIcon className="text-2xl" />
          </button>
          <button className="icon-button w-10 dark:text-white">
            <BiSortAlt2 className="text-xl" />
          </button>
        </div>
        <div className="search-wrapper dark:bg-dark-main-bg">
          <div>
            <IoIosSearch className="dark:text-white text-2xl text-gray-500" />
          </div>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <Table {...getTableProps()}>
        <TableHead sx={{ backgroundColor: isDarkMode ? "#1c1c1c" : "white" }}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ color: "grey" }}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps({})}>
                {row.cells.map((cell, index) => (
                  <TableCell
                    {...cell.getCellProps()}
                    key={index}
                    sx={{
                      color: (theme) => (isDarkMode ? "#FFFFFF" : "#000000"),
                    }}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Order;
