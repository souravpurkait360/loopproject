import React from 'react';

interface AlertIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

const AlertIcon: React.FC<AlertIconProps> = ({
    width = 16,
    height = 16,
    fill = 'none',
    stroke = 'white',
    strokeWidth = 1.5,
}) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.1318 3.51942L2.18831 12.1705C1.80736 12.8372 2.28873 13.6667 3.05655 13.6667H12.9435C13.7114 13.6667 14.1927 12.8372 13.8118 12.1705L8.86828 3.51943C8.48439 2.84761 7.51569 2.84761 7.1318 3.51942Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 7.33333V9.55777M8 10.9686V11.3333"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
    </svg>
);

export default AlertIcon;
