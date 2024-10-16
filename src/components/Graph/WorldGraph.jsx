import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

// Define the location coordinates and revenue data
const locations = [
  { city: "New York", coordinates: [-74.006, 40.7128], revenue: 72000 },
  { city: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39000 },
  { city: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25000 },
  { city: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61000 },
];

// The URL of a simplified world map (topoJSON format)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LocationRevenue = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="p-4 dark:border-none dark:bg-dark-map-bg rounded-lg max-w-xs">
      {/* Title */}
      <h3 className="text-lg font-medium mb-4">Revenue by Location</h3>

      {/* World Map */}
      <ComposableMap
        projectionConfig={{ scale: 120 }}
        width={400}
        height={200}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Geographies: Render the world map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#A8C5DA" // Set the new fill color to #A8C5DA
                stroke="#D6D6DA" // Optional: Set the stroke color to light gray or any other shade
              />
            ))
          }
        </Geographies>

        {/* Markers: Black dots for cities */}
        {locations.map(({ city, coordinates }) => (
          <Marker key={city} coordinates={coordinates}>
            <circle r={5} fill={isDarkMode ? "#c6c7f8" : "#000"} />
          </Marker>
        ))}
      </ComposableMap>

      {/* Location Revenue List */}
      <div className="mt-4">
        {locations.map((location, index) => (
          <div className="mb-2 pb-2">
            <div key={index} className="flex justify-between items-center">
              {/* City Name */}
              <span className="text-gray-700 dark:text-dark-text-title">
                {location.city}
              </span>
              {/* Revenue */}
              <span className="text-gray-500 dark:text-dark-text-title">
                {(location.revenue / 1000).toFixed(0)}K
              </span>
            </div>

            {/* Progress Bar (showing proportional revenue) */}
            <div className="flex-1 mt-1">
              <div className="w-full bg-gray-200 dark:bg-dark-text-disabled h-[3px] rounded-full">
                <div
                  className="bg-blue-400 dark:bg-[#a8c5da] h-[3px] rounded-full"
                  style={{ width: `${(location.revenue / 72000) * 100}%` }} // Dynamically setting the width based on max revenue
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationRevenue;
