import React from 'react';
import './FolderIcon.css'; // 引入 CSS

const FolderIcon = ({ className = '', width = 40, height = 40 }) => (
  <svg
    className={`folder-icon ${className}`}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <path
      className="icon-path"
      d="M736.005 696.494H174.18c-17.673 0-32-14.327-32-32V255.582c0-17.673 14.327-32 32-32h157.213c7.96 0 15.635 2.967 21.525 8.321l47.547 43.222h335.54c17.673 0 32 14.327 32 32v357.369c0 17.673-14.327 32-32 32z m-529.825-64h497.825V339.125H388.094a32.002 32.002 0 0 1-21.525-8.321l-47.547-43.222H206.18v344.912z"
    />
    <path
      className="icon-path"
      d="M853.18 821.092H317.509c-17.673 0-32-14.327-32-32s14.327-32 32-32H821.18V414.206c0-17.673 14.327-32 32-32s32 14.327 32 32v374.886c0 17.673-14.327 32-32 32z"
    />
  </svg>
);

export default FolderIcon;

