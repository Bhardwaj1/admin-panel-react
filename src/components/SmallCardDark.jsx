import React from "react";
import { useState } from "react";
import PositiveGrowthIcon from "../assests/images/positiveGrowth";
import { useTheme } from "../context/ThemeContext";
import NegativeGrowthIcon from "../assests/images/NegativeGrowth";

const SmallCardDark = ({
  cardHeader,
  amount,
  growth,
  bgColor,
  positiveNegativeGrowth,
  handleOpen,
}) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-8 rounded-2xl ${bgColor} border dark:border-none dark:bg-dark-card-bg dark:text-dark-text-title h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpen}
    >
      <div className="text-lg font-semibold mb-4">{cardHeader}</div>

      {/* Toggle between amount and growth on hover */}
      <div className="flex items-center justify-between mt-2">
        {!isHovered ? (
          // Show amount if not hovered
          <div className="text-2xl font-bold">{amount}</div>
        ) : (
          // Show growth and image if hovered
          <div className="text-sm flex items-center justify-center gap-1.5">
            {growth}
            {positiveNegativeGrowth ? (
              <PositiveGrowthIcon isDarkMode={isDarkMode} />
            ) : (
              <NegativeGrowthIcon isDarkMode={isDarkMode} />
            )}
          </div>
        )}

        {/* Swap amount and growth section on hover */}
        {isHovered ? (
          // Show amount in place of growth when hovered
          <div className="text-2xl font-bold">{amount}</div>
        ) : (
          // Show growth and image in place of amount when not hovered
          <div className="text-sm flex items-center justify-center gap-1.5">
            {growth}
            {positiveNegativeGrowth ? (
              <PositiveGrowthIcon isDarkMode={isDarkMode} />
            ) : (
              <NegativeGrowthIcon isDarkMode={isDarkMode} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallCardDark;
