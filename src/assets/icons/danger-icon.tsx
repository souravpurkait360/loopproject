import React from 'react';

interface DangerIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const DangerIcon: React.FC<DangerIconProps> = ({ width = 36, height = 36, fill = "#FDD506" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill={fill} />
        </svg>
    );
};

export default DangerIcon;
