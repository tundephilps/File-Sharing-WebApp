import React from "react";

const QuickAccess = () => {
  return (
    <section class="content-section">
      <h1 class="section-header">Quick Access</h1>
      <div class="access-links">
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <span class="access-text">Images</span>
        </div>
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-music"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" /> <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span class="access-text">Music</span>
        </div>
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <span class="access-text">Video</span>
        </div>
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-align-left"
            >
              <line x1="17" y1="10" x2="3" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="3" y2="14" />
              <line x1="17" y1="18" x2="3" y2="18" />
            </svg>
          </div>
          <span class="access-text">Docs</span>
        </div>
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span class="access-text">Apps</span>
        </div>
        <div class="access-link-wrapper">
          <div class="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-down-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 12 16 16 12" />
              <line x1="12" y1="8" x2="12" y2="16" />
            </svg>
          </div>
          <span class="access-text">Download</span>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
