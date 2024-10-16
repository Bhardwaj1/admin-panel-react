import React from "react";

const NotificationIcon = ({ isDarkMode }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3281 12.7453C14.8945 11.9984 14.25 9.88516 14.25 7.125C14.25 5.4674 13.5915 3.87769 12.4194 2.70558C11.2473 1.53348 9.65761 0.875 8.00001 0.875C6.34241 0.875 4.7527 1.53348 3.58059 2.70558C2.40849 3.87769 1.75001 5.4674 1.75001 7.125C1.75001 9.88594 1.1047 11.9984 0.671104 12.7453C0.560378 12.9352 0.501677 13.1509 0.500923 13.3707C0.500168 13.5905 0.557386 13.8066 0.666806 13.9973C0.776226 14.1879 0.933978 14.3463 1.12415 14.4565C1.31433 14.5667 1.53021 14.6248 1.75001 14.625H4.93829C5.08249 15.3306 5.46597 15.9647 6.02386 16.4201C6.58176 16.8756 7.27983 17.1243 8.00001 17.1243C8.72019 17.1243 9.41826 16.8756 9.97616 16.4201C10.5341 15.9647 10.9175 15.3306 11.0617 14.625H14.25C14.4697 14.6247 14.6855 14.5665 14.8756 14.4562C15.0657 14.346 15.2233 14.1875 15.3326 13.9969C15.442 13.8063 15.4991 13.5903 15.4983 13.3705C15.4975 13.1508 15.4388 12.9351 15.3281 12.7453ZM8.00001 15.875C7.61237 15.8749 7.23429 15.7546 6.91782 15.5308C6.60135 15.3069 6.36204 14.9905 6.23282 14.625H9.7672C9.63798 14.9905 9.39867 15.3069 9.0822 15.5308C8.76573 15.7546 8.38765 15.8749 8.00001 15.875ZM1.75001 13.375C2.35157 12.3406 3.00001 9.94375 3.00001 7.125C3.00001 5.79892 3.52679 4.52715 4.46448 3.58947C5.40216 2.65178 6.67393 2.125 8.00001 2.125C9.32609 2.125 10.5979 2.65178 11.5355 3.58947C12.4732 4.52715 13 5.79892 13 7.125C13 9.94141 13.6469 12.3383 14.25 13.375H1.75001Z"
        fill={isDarkMode ? "#fff" : "#1C1C1C"}
      />
    </svg>
  );
};

export default NotificationIcon;
