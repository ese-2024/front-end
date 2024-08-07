import React from "react";

interface CheckI {
    fill: string;
}

export default function Check({fill}: CheckI) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_146_411)">
                <path d="M18.3337 9.2333V9.99997C18.3326 11.797 17.7507 13.5455 16.6748 14.9848C15.5988 16.4241 14.0864 17.477 12.3631 17.9866C10.6399 18.4961 8.79804 18.4349 7.11238 17.8121C5.42673 17.1894 3.98754 16.0384 3.00946 14.5309C2.03138 13.0233 1.56682 11.24 1.68506 9.4469C1.80329 7.65377 2.498 5.94691 3.66556 4.58086C4.83312 3.21482 6.41098 2.26279 8.16382 1.86676C9.91665 1.47073 11.7505 1.65192 13.392 2.3833" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 9.16671L10 11.6667L18.3333 3.33337" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_146_411">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}


