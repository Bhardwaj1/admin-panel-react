// Dashboard.js
import React from "react";
import SmallCard from "../components/SmallCard";
import MyResponsiveBar from "../components/Graph/ProjectionVsActualGraph";
import LineChart from "../components/Graph/LineChart";
import ProductTable from "../components/Table/ProductTable";
import DonutChart from "../components/Graph/DonutChart";
import LocationRevenue from "../components/Graph/WorldGraph";
import { useNavigate } from "react-router-dom";
import SmallCardDark from "../components/SmallCardDark";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-dark-main-bg text-black dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-6">eCommerce</h1>
      <div className="flex gap-8 sm:flex-col lg:flex-row">
        <div className="grid grid-cols-2 gap-8" style={{ flex: 1.3 }}>
          <div>
            <SmallCard
              cardHeader="Customers"
              amount="3,781"
              growth="+11.01%"
              bgColor="bg-[#E3F5FF]"
              positiveNegativeGrowth={true}
            />
          </div>
          <div>
            <SmallCardDark
              cardHeader="Orders"
              amount="1,219"
              growth="-0.03%"
              bgColor="bg-[#F7F9FB]"
              positiveNegativeGrowth={false}
              handleOpen={() => navigate("/orders")}
            />
          </div>
          <div>
            <SmallCardDark
              cardHeader="Revenue"
              amount="$695"
              growth="+15.03%"
              bgColor="bg-[#F7F9FB]"
              positiveNegativeGrowth={true}
            />
          </div>
          <div>
            <SmallCard
              cardHeader="Growth"
              amount="30.1%"
              growth="+6.08%"
              bgColor="bg-[#E5ECF6]"
              positiveNegativeGrowth={true}
            />
          </div>
        </div>
        <div className="flex-1">
          <MyResponsiveBar />
        </div>
      </div>

      {/* Revenue Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 w-full ">
        <div className="p-6 dark:border-none dark:bg-dark-map-bg rounded-xl col-span-3">
          <div className="flex items-center gap-6 mb-4">
            <p className="font-medium text-lg">Revenue</p>
            <p className="text-gray-400">|</p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <p className="font-medium">Current Week: $58,211</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#a0c4ff]"></div>
              <p className="font-medium">Previous Week: $68,768</p>
            </div>
          </div>
          <div className="w-full">
            <LineChart />
          </div>
        </div>
        <div className="">
          <LocationRevenue />
        </div>
      </div>

      {/* Top Selling Products Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="p-6 dark:border-none dark:bg-dark-map-bg rounded-lg col-span-3 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <ProductTable />
        </div>
        <div>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
