import React from 'react';

interface WalletIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const WalletIcon: React.FC<WalletIconProps> = ({ width = 24, height = 24, color = "white" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H11" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5 11.5V9.5C20.5 8.39543 19.6046 7.5 18.5 7.5H2V19C2 20.1046 2.89543 21 4 21H18.5C19.6046 21 20.5 20.1046 20.5 19V17" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.5 15.5V13C21.5 12.4477 21.0523 12 20.5 12H20C18.8954 12 18 12.8954 18 14V14.5C18 15.6046 18.8954 16.5 20 16.5H20.5C21.0523 16.5 21.5 16.0523 21.5 15.5Z" stroke={color} strokeOpacity="0.5" strokeWidth="1.3" strokeLinecap="square" />
            <path d="M2 7V6.91896C2 6.06907 2.53713 5.31201 3.3393 5.03125L9.3393 2.93124C10.6397 2.47612 12 3.44127 12 4.81896V7" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
    );
}

export default WalletIcon;
