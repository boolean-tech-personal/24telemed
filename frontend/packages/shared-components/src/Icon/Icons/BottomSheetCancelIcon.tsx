import { createSvgIcon } from '../SvgIcon';

export const BottomSheetCancelIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4862_2303)">
      <path
        d="M18 6L6 18"
        stroke="black"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="black"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4862_2303">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>,
  'BottomSheetCancel'
);
