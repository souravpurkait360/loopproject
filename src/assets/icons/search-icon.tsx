import React from 'react';

interface SearchIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({
    width = 36,
    height = 36,
    fill = "#EEEEEE",
    stroke = "#7F8785",
    strokeWidth = 1.125
}) => (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill={fill} />
        <circle cx="17.25" cy="17.25" r="6.1875" stroke={stroke} stroke-width={strokeWidth} />
        <path d="M21.75 21.75L24.75 24.75" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" />
    </svg>
);

export default SearchIcon;
