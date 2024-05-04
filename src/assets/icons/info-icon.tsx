import React from 'react';

interface InfoIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ width = 24, height = 24, color = "#595959" }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9.25" stroke={color} strokeWidth="1.5" />
        <path d="M12 10.5C12 13.5 12 14.5 12 17.5M12 7.5V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default InfoIcon;
