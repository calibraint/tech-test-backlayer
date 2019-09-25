import React from "react";
import { SvgXml } from 'react-native-svg';

export default function HelpSvgToJSX() {
  const xml = `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      fill="none"
      viewBox="0 0 49 49"
    >
      <g filter="url(#filter0_d)">
        <circle cx="24.5" cy="21.5" r="18.5" fill="#31C5C3" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="49"
          height="49"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix values="0 0 0 0 0.227451 0 0 0 0 0.819608 0 0 0 0 0.74902 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
	`;
	return <SvgXml xml={xml} width="20%" height="60%" />
}
