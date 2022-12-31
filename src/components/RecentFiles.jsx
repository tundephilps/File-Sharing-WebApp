import React from "react";

const RecentFiles = () => {
  return (
    <section class="content-section">
      <div class="section-header-wrapper">
        <h1 class="section-header">Recent Files</h1>
        <a class="section-header-link">View all files</a>
      </div>
      <div class="files-table">
        <div class="files-table-header">
          <div class="column-header table-cell">Name</div>
          <div class="column-header table-cell size-cell">Size</div>
          <div class="column-header table-cell">Last Modified</div>
          <div class="column-header table-cell">Action</div>
        </div>
        <div class="files-table-row">
          <div class="table-cell name-cell pdf">Brandenburg.pdf</div>
          <div class="table-cell">42 MB</div>
          <div class="table-cell">Aug 26, 2020</div>
          <div class="table-cell action-cell">
            <button class="more-action"></button>
          </div>
        </div>
        <div class="files-table-row">
          <div class="table-cell name-cell jpg">TheLionsRoar.jpg</div>
          <div class="table-cell size-cell">500 KB</div>
          <div class="table-cell">Aug 26, 2020</div>
          <div class="table-cell action-cell">
            <button class="more-action"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentFiles;
