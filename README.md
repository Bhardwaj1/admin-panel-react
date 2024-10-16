
# Admin Panel React

This project is an admin panel built with React. It is a dashboard that utilizes various libraries like Material UI, Nivo charts, React Table, and more, for creating rich and interactive data-driven interfaces. 

## Features

- **Material UI** for responsive UI components.
- **Nivo charts** for creating stunning data visualizations.
- **React Table** for handling tabular data.
- **React Router DOM** for routing.
- **Tailwind CSS** for styling.
- **Recharts and Chart.js** for additional charting options.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Usage](#usage)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhardwaj1/admin-panel-react.git
   cd admin-panel-react
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.


## Dependencies

Here is a list of the major dependencies used in the project:

- **@emotion/react** and **@emotion/styled**: For adding CSS-in-JS support.
- **@mui/icons-material** and **@mui/material**: Material UI components and icons.
- **@nivo/bar, @nivo/line, @nivo/geo, @nivo/core, @nivo/marimekko**: Nivo libraries for creating various types of charts and maps.
- **chart.js** and **react-chartjs-2**: For additional charting capabilities.
- **react-table**: For handling table data.
- **react-simple-maps**: For creating geographic data visualizations.
- **d3-geo**: For manipulating geographic data with D3.js.
- **react-router-dom**: For handling routing within the app.
- **tailwindcss**: For styling the application using utility-first CSS classes.


### Tailwind CSS

The project includes Tailwind CSS for styling. You can modify the `tailwind.config.js` file to customize the theme, extend the styles, and add new utilities.

To apply new Tailwind styles, run:

```bash
npm run build:css
```

Or, to keep watching for changes in your CSS files:

```bash
npm run watch:css
```

### Material UI

Material UI components are used throughout the app. You can customize the theme by modifying the Material UI theme object in the configuration file.

For more information, visit the [Material UI documentation](https://mui.com/).

