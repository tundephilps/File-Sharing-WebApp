import React from "react";

const Preview = () => {
  return (
    <section class="content-section">
      <div class="section-header-wrapper">
        <h1 class="section-header">Preview</h1>
        <a class="section-header-link">View in folders</a>
      </div>
      <div class="content-section-line">
        <div class="section-part left">
          <a class="image-wrapper">
            <div class="image-overlay">
              <div class="video-info">
                <div class="video-info-text">
                  <p class="video-name medium">Happiness & Tears</p>
                  <p class="video-subtext medium">45.5 MB</p>
                </div>
                <button class="btn-play"></button>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" />
            <span class="video-time">10:32</span>
          </a>
        </div>
        <div class="section-part right">
          <div class="content-part-line">
            <a class="image-wrapper">
              <div class="image-overlay">
                <div class="video-info">
                  <div class="video-info-text">
                    <p class="video-name tiny">High Hopes</p>
                    <p class="video-subtext tiny">50 MB</p>
                  </div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" />
              <span class="video-time">02:35</span>
            </a>
            <a class="image-wrapper">
              <div class="image-overlay">
                <div class="video-info">
                  <div class="video-info-text">
                    <p class="video-name tiny">Imaginery you</p>
                    <p class="video-subtext tiny">210.2 MB</p>
                  </div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" />
              <span class="video-time">04:15</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
