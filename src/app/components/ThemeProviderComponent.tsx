"use client";
import PropTypes from "prop-types";
import { ThemeProvider } from "next-themes";

function ThemeProviderComponent({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-600 dark:text-gray-200 text-gray-600 min-h-screen transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
}

ThemeProviderComponent.propTypes = {};

export default ThemeProviderComponent;
