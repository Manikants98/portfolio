import classNames from 'classnames';
import React, { SVGProps } from 'react';

/**
 * Flutter icon component
 * Renders the Flutter logo as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Flutter logo SVG
 */
export const FlutterIcon: React.FC<SVGProps<SVGSVGElement>> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" {...props}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <polyline
          points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316"
          fill="#40d0fd"
        ></polyline>
        <polygon
          points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125"
          fill="#41d0fd"
        ></polygon>
        <polygon
          points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479"
          fill="#1fbcfd"
        ></polygon>
        <polygon
          points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675"
          fill="#095a9d"
        ></polygon>
        <polygon
          points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675"
          fill="#0e5199"
        ></polygon>
      </g>
    </svg>
  );
};

/**
 * React icon component
 * Renders the React logo as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} React logo SVG
 */
export const ReactIcon: React.FC<SVGProps<SVGSVGElement>> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
          fill="#53C1DE"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
          fill="#53C1DE"
        ></path>
      </g>
    </svg>
  );
};

/**
 * Node.js icon component
 * Renders the Node.js logo as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Node.js logo SVG
 */
export const NodeJsIcon: React.FC<SVGProps<SVGSVGElement>> = (props): JSX.Element => {
  return (
    <svg
      viewBox="-16.5 0 289 289"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <path
            d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"
            fill="#539E43"
          ></path>
        </g>
      </g>
    </svg>
  );
};

/**
 * Project icon component
 * Renders the Project icon as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Project icon SVG
 */
export const ProjectIcon: React.FC<SVGProps<SVGSVGElement> & { isSelected: boolean }> = (
  props
): JSX.Element => {
  const { isSelected, ...rest } = props;
  return (
    <svg height={24} width={24} viewBox="0 0 24 24" fill="none" {...props}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          opacity="0.5"
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke="#069110"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
          strokeWidth="2"
        ></path>
        <path
          d="M7 18V9"
          stroke="#069110"
          strokeWidth="2"
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M12 18V6"
          stroke="#069110"
          strokeWidth="2"
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M17 18V13"
          stroke="#069110"
          strokeWidth="2"
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
      </g>
    </svg>
  );
};

/**
 * Blog icon component
 * Renders the Blog icon as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Blog icon SVG
 */
export const BlogIcon: React.FC<SVGProps<SVGSVGElement> & { isSelected: boolean }> = (
  props
): JSX.Element => {
  const { isSelected, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={24}
      height={24}
      className={classNames('!transition-all group-hover:stroke-white', {
        '!stroke-white': isSelected,
      })}
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          opacity="0.5"
          d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M8 12H16"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M8 8H16"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M8 16H13"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
      </g>
    </svg>
  );
};

/**
 * Contribution icon component
 * Renders the Contribution icon as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Contribution icon SVG
 */
export const ContributionIcon: React.FC<SVGProps<SVGSVGElement> & { isSelected: boolean }> = (
  props
): JSX.Element => {
  const { isSelected, ...rest } = props;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className={classNames('!transition-all group-hover:stroke-white', {
        '!stroke-white': isSelected,
      })}
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M8 9V15"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M12 9V15"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <rect
          opacity="0.5"
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></rect>
      </g>
    </svg>
  );
};

/**
 * Skill icon component
 * Renders the Skill icon as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Skill icon SVG
 */
export const SkillIcon: React.FC<SVGProps<SVGSVGElement> & { isSelected: boolean }> = (
  props
): JSX.Element => {
  const { isSelected, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={24}
      height={24}
      className={classNames('!transition-all group-hover:stroke-white', {
        '!stroke-white': isSelected,
      })}
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          opacity="0.5"
          d="M7 17.9983C4.82497 17.9862 3.64706 17.8897 2.87868 17.1213C2 16.2426 2 14.8284 2 12L2 8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2L16 2C18.8284 2 20.2426 2 21.1213 2.87868C22 3.75736 22 5.17157 22 8V12C22 14.8284 22 16.2426 21.1213 17.1213C20.3915 17.8512 19.2921 17.9748 17.3197 17.9957L16.5 17.9983"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M9 6L15 6"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M7 9.5H17"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M10.8907 13.9454C11.53 13.4007 12.4702 13.4007 13.1094 13.9454C13.3833 14.1789 13.7239 14.32 14.0827 14.3486C14.9199 14.4154 15.5847 15.0802 15.6515 15.9174C15.6802 16.2762 15.8212 16.6168 16.0547 16.8907C16.5994 17.53 16.5994 18.4702 16.0547 19.1094C15.8212 19.3833 15.6802 19.7239 15.6515 20.0827C15.5847 20.9199 14.9199 21.5847 14.0827 21.6515C13.7239 21.6802 13.3833 21.8212 13.1094 22.0547C12.4702 22.5994 11.53 22.5994 10.8907 22.0547C10.6168 21.8212 10.2762 21.6802 9.91743 21.6515C9.08021 21.5847 8.41539 20.9199 8.34858 20.0827C8.31995 19.7239 8.17888 19.3833 7.94543 19.1094C7.40068 18.4702 7.40068 17.53 7.94543 16.8907C8.17888 16.6168 8.31995 16.2762 8.34858 15.9174C8.4154 15.0802 9.08021 14.4154 9.91743 14.3486C10.2762 14.32 10.6168 14.1789 10.8907 13.9454Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M10.5 18.2L11.3571 19L13.5 17"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
      </g>
    </svg>
  );
};

/**
 * Dashboard icon component
 * Renders the Dashboard icon as an SVG
 * @param {SVGProps<SVGSVGElement>} props - SVG element props
 * @returns {JSX.Element} Dashboard icon SVG
 */
export const DashboardIcon: React.FC<SVGProps<SVGSVGElement> & { isSelected: boolean }> = (
  props
): JSX.Element => {
  const { isSelected, ...rest } = props;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className={classNames('!transition-all group-hover:stroke-white', {
        '!stroke-white': isSelected,
      })}
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M5.5 15.5C5.5 14.5572 5.5 14.0858 5.79289 13.7929C6.08579 13.5 6.55719 13.5 7.5 13.5H8.5C9.44281 13.5 9.91421 13.5 10.2071 13.7929C10.5 14.0858 10.5 14.5572 10.5 15.5V16.5C10.5 17.4428 10.5 17.9142 10.2071 18.2071C9.91421 18.5 9.44281 18.5 8.5 18.5C7.08579 18.5 6.37868 18.5 5.93934 18.0607C5.5 17.6213 5.5 16.9142 5.5 15.5Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M5.5 8.5C5.5 7.08579 5.5 6.37868 5.93934 5.93934C6.37868 5.5 7.08579 5.5 8.5 5.5C9.44281 5.5 9.91421 5.5 10.2071 5.79289C10.5 6.08579 10.5 6.55719 10.5 7.5V8.5C10.5 9.44281 10.5 9.91421 10.2071 10.2071C9.91421 10.5 9.44281 10.5 8.5 10.5H7.5C6.55719 10.5 6.08579 10.5 5.79289 10.2071C5.5 9.91421 5.5 9.44281 5.5 8.5Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M13.5 15.5C13.5 14.5572 13.5 14.0858 13.7929 13.7929C14.0858 13.5 14.5572 13.5 15.5 13.5H16.5C17.4428 13.5 17.9142 13.5 18.2071 13.7929C18.5 14.0858 18.5 14.5572 18.5 15.5C18.5 16.9142 18.5 17.6213 18.0607 18.0607C17.6213 18.5 16.9142 18.5 15.5 18.5C14.5572 18.5 14.0858 18.5 13.7929 18.2071C13.5 17.9142 13.5 17.4428 13.5 16.5V15.5Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          d="M13.5 7.5C13.5 6.55719 13.5 6.08579 13.7929 5.79289C14.0858 5.5 14.5572 5.5 15.5 5.5C16.9142 5.5 17.6213 5.5 18.0607 5.93934C18.5 6.37868 18.5 7.08579 18.5 8.5C18.5 9.44281 18.5 9.91421 18.2071 10.2071C17.9142 10.5 17.4428 10.5 16.5 10.5H15.5C14.5572 10.5 14.0858 10.5 13.7929 10.2071C13.5 9.91421 13.5 9.44281 13.5 8.5V7.5Z"
          stroke="#069110"
          strokeWidth={2}
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
        <path
          opacity="0.5"
          d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10"
          stroke="#069110"
          strokeWidth={2}
          strokeLinecap="round"
          className={classNames('!transition-all group-hover:stroke-white', {
            '!stroke-white': isSelected,
          })}
        ></path>
      </g>
    </svg>
  );
};
