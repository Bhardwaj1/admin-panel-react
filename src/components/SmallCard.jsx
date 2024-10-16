import React from "react";
import { useState } from "react";
import PositiveGrowthIcon from "../assests/images/positiveGrowth";
import NegativeGrowthIcon from "../assests/images/NegativeGrowth";

const SmallCard = ({
  cardHeader,
  amount,
  growth,
  bgColor,
  positiveNegativeGrowth,
  handleOpen,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`p-8 rounded-2xl ${bgColor} border dark:${bgColor} dark:text-black h-full`}
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
              <PositiveGrowthIcon />
            ) : (
              <NegativeGrowthIcon />
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
              <PositiveGrowthIcon />
            ) : (
              <NegativeGrowthIcon />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallCard;
