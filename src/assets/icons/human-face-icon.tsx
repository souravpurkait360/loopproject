import React from 'react';

interface HumanFaceIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const HumanFaceIcon: React.FC<HumanFaceIconProps> = ({
    width = 37,
    height = 36,
    fill = '#A586EF',
}) => (
    <svg width={width} height={height} viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 36C28.4411 36 36.5 27.9411 36.5 18C36.5 8.05888 28.4411 0 18.5 0C8.55888 0 0.5 8.05888 0.5 18C0.5 27.9411 8.55888 36 18.5 36Z" fill={fill} />
    </svg>
);

export default HumanFaceIcon;
