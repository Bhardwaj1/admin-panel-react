import React from "react";

const DairyIcon = ({ isDarkMode }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6875 6.60075C17.6118 6.36745 17.4692 6.16158 17.2773 6.00877C17.0855 5.85597 16.8529 5.76297 16.6086 5.74137L11.9688 5.34137L10.15 1.01637C10.0553 0.789432 9.8956 0.595581 9.69097 0.45923C9.48633 0.322878 9.24592 0.250122 9.00002 0.250122C8.75411 0.250122 8.51371 0.322878 8.30907 0.45923C8.10443 0.595581 7.94471 0.789432 7.85002 1.01637L6.03674 5.34137L1.39142 5.74372C1.14614 5.76433 0.912399 5.8569 0.719516 6.00982C0.526633 6.16275 0.383193 6.36921 0.307183 6.60333C0.231173 6.83745 0.225978 7.0888 0.292249 7.32586C0.358519 7.56292 0.493305 7.77514 0.679705 7.9359L4.20392 11.0156L3.14767 15.589C3.09182 15.8284 3.10776 16.0788 3.19349 16.3092C3.27923 16.5395 3.43095 16.7394 3.6297 16.884C3.82845 17.0285 4.0654 17.1113 4.31093 17.1219C4.55647 17.1326 4.79968 17.0706 5.01017 16.9437L8.99455 14.5218L12.9875 16.9437C13.198 17.0706 13.4412 17.1326 13.6868 17.1219C13.9323 17.1113 14.1692 17.0285 14.368 16.884C14.5667 16.7394 14.7185 16.5395 14.8042 16.3092C14.8899 16.0788 14.9059 15.8284 14.85 15.589L13.7945 11.0109L17.318 7.9359C17.5044 7.77459 17.6389 7.56176 17.7046 7.3242C17.7704 7.08664 17.7644 6.83494 17.6875 6.60075ZM16.4985 6.99137L12.975 10.0664C12.8035 10.2155 12.676 10.4086 12.606 10.6249C12.5361 10.8412 12.5265 11.0724 12.5781 11.2937L13.6367 15.875L9.64689 13.4531C9.45223 13.3345 9.22871 13.2718 9.0008 13.2718C8.77288 13.2718 8.54936 13.3345 8.3547 13.4531L4.37033 15.875L5.42189 11.2968C5.47357 11.0755 5.46393 10.8443 5.394 10.628C5.32407 10.4118 5.1965 10.2187 5.02502 10.0695L1.50002 6.99606C1.49973 6.99373 1.49973 6.99136 1.50002 6.98903L6.14377 6.58747C6.37049 6.56748 6.58745 6.48598 6.77125 6.35174C6.95505 6.21751 7.09871 6.03564 7.18674 5.82575L9.00002 1.50622L10.8125 5.82575C10.9005 6.03564 11.0442 6.21751 11.228 6.35174C11.4118 6.48598 11.6288 6.56748 11.8555 6.58747L16.5 6.98903C16.5 6.98903 16.5 6.99372 16.5 6.9945L16.4985 6.99137Z"
        fill={isDarkMode ? "#fff" : "#1C1C1C"}
      />
    </svg>
  );
};

export default DairyIcon;
