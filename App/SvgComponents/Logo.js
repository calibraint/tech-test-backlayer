import React from "react";
import { SvgXml } from 'react-native-svg';

export default function LogoSvgToJSX(props) {
  const xml = `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="36"
      fill="none"
      viewBox="0 0 50 36"
    >
      <path
        fill="url(#paint0_linear)"
        d="M49.612 15.11l-7.22-7.22a1.327 1.327 0 00-1.875 1.876l6.282 6.281L30.485 32.36l-5.343-5.343 12.562-12.564 1.594 1.593-9.75 9.751a1.328 1.328 0 001.876 1.876l10.688-10.688a1.325 1.325 0 000-1.876l-3.47-3.47a1.328 1.328 0 00-1.873 0L16.047 32.36l-1.876-1.875 24.472-24.47a1.327 1.327 0 000-1.876L34.892.389a1.322 1.322 0 00-1.875 0L26.735 6.67 20.453.389a1.327 1.327 0 00-1.875 0L.389 18.577a1.327 1.327 0 000 1.876l7.22 7.219a1.322 1.322 0 001.874 0 1.327 1.327 0 000-1.876L3.2 19.514 19.516 3.201l5.344 5.344-12.563 12.564-1.594-1.594 9.75-9.75a1.327 1.327 0 00-1.875-1.875L7.89 18.577a1.327 1.327 0 000 1.876l3.469 3.469a1.327 1.327 0 001.874 0l20.72-20.72 1.876 1.875-24.471 24.47a1.327 1.327 0 000 1.876l3.75 3.751a1.328 1.328 0 001.874 0l6.282-6.282 6.282 6.282a1.327 1.327 0 001.874 0l18.19-18.19a1.326 1.326 0 00.001-1.875z"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="27.819"
          x2="18.616"
          y1="-9.484"
          y2="86.291"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3AD1BF" />
          <stop offset="1" stopColor="#119BD2" />
        </linearGradient>
      </defs>
    </svg>
	`;
	return <SvgXml xml={xml} width={props.width ? props.width : "60%"} height={props.height ? props.height : "40%"} />
}
