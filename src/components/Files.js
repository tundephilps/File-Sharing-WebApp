import React from "react";

const Files = () => {
  return (
    <>
      <div class="right-area-header-wrapper">
        <p class="right-area-header">File Received</p>
      </div>
      <div class="received-item-line">
        <div class="progress-line">
          <span class="time start">15:30</span>
          <span class="time end">18:30</span>
        </div>
        <div class="received-items-content">
          <div class="received-files">
            <div class="image-wrapper">
              <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="image-wrapper">
              <img src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="image-wrapper">
              <img src="https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
            </div>
          </div>
          <div class="received-files-info">
            Received <span class="info-purple">3 images</span> total{" "}
            <span class="info-purple">50.3 MB</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Files;
