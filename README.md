# CryptoTracker: Namibian Cryptocurrency Tracker

## Project Overview

CryptoTracker is a dedicated cryptocurrency tracking platform designed specifically for Namibian cryptocurrency enthusiasts. Built with React and utilizing the CoinGecko API, this application provides real-time cryptocurrency data in Namibian Dollars (NAD), eliminating the need for external currency converters.

<img src="https://github.com/Tileni97/Cryptocurrency-Tracker/blob/Tileni97-patch-1/Screenshot%202024-09-25%20205719.png?raw=true" alt="CryptoTracker Screenshot 1" width="300"/>

<img src="https://github.com/Tileni97/Cryptocurrency-Tracker/blob/Tileni97-patch-1/Screenshot%202024-09-25%20210322.png?raw=true" alt="CryptoTracker Screenshot 2" width="300"/>

<img src="https://github.com/Tileni97/Cryptocurrency-Tracker/blob/Tileni97-patch-1/Screenshot%202024-09-25%20210431.png?raw=true" alt="CryptoTracker Screenshot 3" width="300"/>

## Features

- **Real-time Data**: Up-to-the-minute prices and market data for a wide range of cryptocurrencies.
- **User-friendly Interface**: Intuitive design for easy navigation through favorite cryptocurrencies.
- **Local Currency Support**: View cryptocurrency prices directly in Namibian Dollars.
- **Comprehensive Market Analysis**: Access detailed charts and insights for data-driven investment decisions.
- **Responsive Design**: Seamless experience across desktop and mobile devices.

## Technologies Used

- React.js
- Context API for state management
- React Router for navigation
- CSS Modules for styling
- CoinGecko API for cryptocurrency data
- Chart.js for data visualization

## Installation and Setup

1. Clone the repository:
   ```
   git clone ...
   ```

2. Navigate to the project directory:
   ```
   cd crypto-tracker
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your CoinGecko API key:
   ```
   VITE_COINGECKO_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser to view the application.

## Project Structure

- `/src`
  - `/components`: Reusable React components
  - `/context`: Context API setup for global state management
  - `/pages`: Main page components (Home, About, Coin details)
 
## Key Components

- `Home.js`: A landing page with search functionality and top 10 cryptocurrencies
- `About.js`: Information about the CryptoTracker project
- `Coin.js`: Detailed view of individual cryptocurrencies with historical data
- `LineChart.js`: Chart component for visualizing price history
- `CoinContext.js`: Context provider for managing global state

## Future Enhancements

- Implement user authentication for personalized watchlists
- Add more advanced filtering and sorting options
- Integrate news feed for latest cryptocurrency updates
- Implement dark mode for better user experience

---

Developed with ❤️ in Namibia
