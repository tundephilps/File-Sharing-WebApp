import React from "react";
import "./App.scss";
import Downloads from "./components/Downloads";
import Files from "./components/Files";
import Preview from "./components/Preview";
import QuickAccess from "./components/QuickAccess";
import RecentFiles from "./components/RecentFiles";
import SearchArea from "./components/SearchArea";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="app-container">
      <Sidebar />

      <div class="main-area">
        <SearchArea />

        <QuickAccess />

        <Preview />

        <RecentFiles />
      </div>
      <div class="right-area">
        <button class="btn-close-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="feather feather-x-circle"
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
        </button>
        <div class="right-area-header-wrapper">
          <p class="right-area-header">Downloads</p>
          <button class="more-action"></button>
        </div>

        <Downloads />

        <Files />
      </div>
    </div>
  );
}

export default App;
