import React from 'react';

interface DownloadIcon2Props {
    width?: number;
    height?: number;
    stroke?: string;
    strokeWidth?: number;
}

const DownloadIcon2: React.FC<DownloadIcon2Props> = ({
    width = 18,
    height = 18,
    stroke = '#025F4C',
    strokeWidth = 1.5,
}) => (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.875 5.25L4.27831 2.54627C4.65785 2.1193 5.20186 1.875 5.77313 1.875H12.2269C12.7981 1.875 13.3422 2.1193 13.7217 2.54627L16.125 5.25M1.875 5.25V13.125C1.875 14.7819 3.21815 16.125 4.875 16.125H13.125C14.7819 16.125 16.125 14.7819 16.125 13.125V5.25M1.875 5.25H16.125M9 7.875V13.5M9 13.5L11.25 12M9 13.5L6.75 12"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default DownloadIcon2;
