import React from 'react';

interface ECardsIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

const ECardsIcon: React.FC<ECardsIconProps> = ({
    width = 36,
    height = 36,
    fill = "#EEEEEE",
    stroke = "#7F8785",
    strokeWidth = 1.5
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill={fill} />
            <path d="M14.0802 23.25H21.9373C23.5941 23.25 24.9373 21.9069 24.9373 20.25V15.75C24.9373 14.0931 23.5941 12.75 21.9373 12.75H14.0802C12.4233 12.75 11.0802 14.0931 11.0802 15.75V20.25C11.0802 21.9069 12.4233 23.25 14.0802 23.25Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" />
            <path d="M11.0781 20.25H24.7501" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" />
            <path d="M13.125 18.375H14.625M16.5 18.375H18" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" />
        </svg>
    );
}

export default ECardsIcon;
