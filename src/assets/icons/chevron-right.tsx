import React from 'react';

interface ChevronRightProps {
    width?: number;
    height?: number;
    color?: string;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
    width = 16,
    height = 16,
    color = '#025F4C',
}) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 4L10 8L6 12"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChevronRight;
