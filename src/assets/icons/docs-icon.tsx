import { FC, SVGProps } from 'react';

const DocsIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="36" height="36" rx="18" fill="#EEEEEE" />
            <path
                d="M19.875 10.875L24 15M19.875 10.875H14.375C13.2704 10.875 12.375 11.7704 12.375 12.875V23.125C12.375 24.2296 13.2704 25.125 14.375 25.125H22C23.1046 25.125 24 24.2296 24 23.125V15M19.875 10.875V14C19.875 14.5523 20.3227 15 20.875 15H24M16.125 13.125V16.125M14.625 14.625H17.625M14.625 19.125H21.375M14.625 21.75H19.875"
                stroke="#7F8785"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default DocsIcon;
