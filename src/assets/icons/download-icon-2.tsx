import React from 'react';

interface DownloadIcon2Props {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

const DownloadIcon2: React.FC<DownloadIcon2Props> = ({
    width = 36,
    height = 36,
    fill = '#FDD506',
    stroke = '#025F4C',
    strokeWidth = 1.5,
}) => (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill={fill} />
        <path
            d="M10.875 14.25L13.2783 11.5463C13.6578 11.1193 14.2019 10.875 14.7731 10.875H21.2269C21.7981 10.875 22.3422 11.1193 22.7217 11.5463L25.125 14.25M10.875 14.25V22.125C10.875 23.7819 12.2181 25.125 13.875 25.125H22.125C23.7819 25.125 25.125 23.7819 25.125 22.125V14.25M10.875 14.25H25.125M18 16.875V22.5M18 22.5L20.25 21M18 22.5L15.75 21"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default DownloadIcon2;
