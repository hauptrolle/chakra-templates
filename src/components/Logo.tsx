import { createIcon } from '@chakra-ui/icon';

// Todo adjust logo for darkmode. Maybe export as to paths instead of path with filter
export const Logo = createIcon({
  displayName: 'Logo',
  viewBox: '0 0 128 127',
  path: (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 0C8.95431 0 0 8.95431 0 20V115C0 117.761 2.23858 120 5 120H44.2413C44.3742 118.029 44.5071 116.002 44.64 113.92L45.92 98.56C46.3467 93.3333 46.72 88.16 47.04 83.04C47.4667 77.92 47.84 73.1733 48.16 68.8H22.56C21.3867 68.8 20.8 68.0533 20.8 66.56L21.28 57.6C21.3867 56.2133 21.6 54.88 21.92 53.6C22.3467 52.2133 22.9867 50.9867 23.84 49.92C24.6933 48.8533 25.76 48 27.04 47.36C28.4267 46.72 30.08 46.4 32 46.4H103.52C104.16 46.4 104.747 46.56 105.28 46.88C105.813 47.2 106.08 47.7867 106.08 48.64L105.44 58.08C105.227 61.28 104.32 63.8933 102.72 65.92C101.227 67.84 98.08 68.8 93.28 68.8H76L72.4944 120H100C111.046 120 120 111.046 120 100V5C120 2.23858 117.761 0 115 0H20Z"
          fill="#48BB78"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="128"
          height="127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="8" dy="7" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.776471 0 0 0 0 0.964706 0 0 0 0 0.835294 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
});
