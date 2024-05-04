import React from 'react';

interface DownloadIcon1Props {
    width?: number;
    height?: number;
    color?: string;
}

const DownloadIcon1: React.FC<DownloadIcon1Props> = ({
    width = 20,
    height = 20,
    color = "#025F4C"
}) => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2.5H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V13.5C2.5 15.7091 4.29086 17.5 6.5 17.5H13.5C15.7091 17.5 17.5 15.7091 17.5 13.5V6.5C17.5 4.29086 15.7091 2.5 13.5 2.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9.99994 5V11.6667M9.99994 11.6667L12.9166 9.16667M9.99994 11.6667L7.08325 9.16667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.41663 14.5834H14.5833" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default DownloadIcon1;
