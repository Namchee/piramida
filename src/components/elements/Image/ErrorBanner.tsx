import { StyleProps } from '@/common/types';
import * as React from 'react';

/**
 * Error banner SVG component.
 *
 * @param {StyleProps} props style props
 * @return {JSX.Element} SVG image as component
 */
function ErrorBanner({ className }: StyleProps): JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 250 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // eslint-disable-next-line max-len
        d="M56 127C56 130.866 59.134 134 63 134H209C212.866 134 216 130.866 216 127C216 123.134 212.866 120 209 120H203C199.134 120 196 116.866 196 113C196 109.134 199.134 106 203 106H222C225.866 106 229 102.866 229 99C229 95.134 225.866 92 222 92H200C203.866 92 207 88.866 207 85C207 81.134 203.866 78 200 78H136C139.866 78 143 74.866 143 71C143 67.134 139.866 64 136 64H79C75.134 64 72 67.134 72 71C72 74.866 75.134 78 79 78H39C35.134 78 32 81.134 32 85C32 88.866 35.134 92 39 92H64C67.866 92 71 95.134 71 99C71 102.866 67.866 106 64 106H24C20.134 106 17 109.134 17 113C17 116.866 20.134 120 24 120H63C59.134 120 56 123.134 56 127ZM226 134C229.866 134 233 130.866 233 127C233 123.134 229.866 120 226 120C222.134 120 219 123.134 219 127C219 130.866 222.134 134 226 134Z"
        fill="#F3F7FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // eslint-disable-next-line max-len
        d="M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508M103.996 140H97.0314H103.996Z"
        fill="white"
      />
      <path
        // eslint-disable-next-line max-len
        d="M92 141.25C92.6904 141.25 93.25 140.69 93.25 140C93.25 139.31 92.6904 138.75 92 138.75V141.25ZM93.537 97.0517L93.4529 98.2988L95.0504 98.4066L94.7673 96.8306L93.537 97.0517ZM159.239 80.1695L158.054 80.5674L158.372 81.5169L159.369 81.4127L159.239 80.1695ZM165 139.978L164.901 138.732L163.75 138.824V139.978H165ZM165 140V141.25H166.25V140H165ZM108.508 138.75C107.817 138.75 107.258 139.31 107.258 140C107.258 140.69 107.817 141.25 108.508 141.25V138.75ZM103.996 141.25C104.686 141.25 105.246 140.69 105.246 140C105.246 139.31 104.686 138.75 103.996 138.75V141.25ZM97.0314 138.75C96.341 138.75 95.7814 139.31 95.7814 140C95.7814 140.69 96.341 141.25 97.0314 141.25V138.75ZM92 138.75C80.5128 138.75 71.25 129.657 71.25 118.5H68.75C68.75 131.091 79.1866 141.25 92 141.25V138.75ZM71.25 118.5C71.25 107.343 80.5128 98.25 92 98.25V95.75C79.1866 95.75 68.75 105.909 68.75 118.5H71.25ZM92 98.25C92.4886 98.25 92.9731 98.2665 93.4529 98.2988L93.6211 95.8045C93.0853 95.7684 92.5448 95.75 92 95.75V98.25ZM94.7673 96.8306C94.4275 94.9394 94.25 92.991 94.25 91H91.75C91.75 93.1399 91.9408 95.2362 92.3067 97.2727L94.7673 96.8306ZM94.25 91C94.25 72.9127 108.913 58.25 127 58.25V55.75C107.532 55.75 91.75 71.532 91.75 91H94.25ZM127 58.25C141.438 58.25 153.697 67.5936 158.054 80.5674L160.424 79.7716C155.735 65.8104 142.544 55.75 127 55.75V58.25ZM159.369 81.4127C160.397 81.3052 161.442 81.25 162.5 81.25V78.75C161.355 78.75 160.223 78.8097 159.109 78.9263L159.369 81.4127ZM162.5 81.25C178.674 81.25 191.75 94.1412 191.75 110H194.25C194.25 92.7217 180.015 78.75 162.5 78.75V81.25ZM191.75 110C191.75 125.07 179.945 137.532 164.901 138.732L165.099 141.224C181.406 139.923 194.25 126.411 194.25 110H191.75ZM163.75 139.978V140H166.25V139.978H163.75ZM165 138.75H108.508V141.25H165V138.75ZM103.996 138.75H97.0314V141.25H103.996V138.75Z"
        fill="#75A4FE"
      />
      <circle
        cx="127.5"
        cy="120.5"
        r="5.5"
        stroke="#75A4FE"
        strokeWidth="2.5"
      />
      <path
        d="M112 109L119 103.507L112 98.2776"
        stroke="#75A4FE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M143 109L136 103.507L143 98.2776"
        stroke="#75A4FE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        rx="6.72014"
        ry="6.64659"
        transform="matrix(-1 0 0 1 143.72 73.6466)"
        stroke="#A4C3FE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="158" cy="47" r="3" stroke="#A4C3FE" strokeWidth="2" />
      <circle cx="189" cy="63" r="3" fill="#A4C3FE" />
      <path
        // eslint-disable-next-line max-len
        d="M164.873 56.8735L165.757 57.7574L165.757 57.7574L164.873 56.8735ZM166.641 56.8735L167.525 55.9896L166.641 56.8735ZM164.873 58.6412L163.99 59.5251V59.5251L164.873 58.6412ZM168.232 62L169.116 62.8839C169.604 62.3957 169.604 61.6043 169.116 61.1161L168.232 62ZM165.001 65.2317L164.117 64.3478L164.117 64.3478L165.001 65.2317ZM165.001 66.9995L165.884 66.1156L165.001 66.9995ZM166.768 66.9995L167.652 67.8834H167.652L166.768 66.9995ZM170 63.7678L170.884 62.8839C170.396 62.3957 169.604 62.3957 169.116 62.8839L170 63.7678ZM173.232 66.9995L172.348 67.8834H172.348L173.232 66.9995ZM174.999 65.2317L175.883 64.3478V64.3478L174.999 65.2317ZM171.768 62L170.884 61.1161C170.649 61.3505 170.518 61.6685 170.518 62C170.518 62.3315 170.649 62.6495 170.884 62.8839L171.768 62ZM175.127 58.6412L176.01 59.5251V59.5251L175.127 58.6412ZM175.127 56.8735L174.243 57.7574V57.7574L175.127 56.8735ZM173.359 56.8735L172.475 55.9896L172.475 55.9896L173.359 56.8735ZM170 60.2322L169.116 61.1161C169.604 61.6043 170.396 61.6043 170.884 61.1161L170 60.2322ZM165.757 57.7574V57.7574L167.525 55.9896C166.549 55.0133 164.966 55.0133 163.99 55.9896L165.757 57.7574ZM165.757 57.7574L165.757 57.7574L163.99 55.9896C163.013 56.9659 163.013 58.5488 163.99 59.5251L165.757 57.7574ZM169.116 61.1161L165.757 57.7574L163.99 59.5251L167.348 62.8839L169.116 61.1161ZM165.884 66.1156L169.116 62.8839L167.348 61.1161L164.117 64.3478L165.884 66.1156ZM165.884 66.1156L165.884 66.1156L164.117 64.3478C163.14 65.3241 163.14 66.907 164.117 67.8834L165.884 66.1156ZM165.884 66.1156H165.884L164.117 67.8834C165.093 68.8597 166.676 68.8597 167.652 67.8834L165.884 66.1156ZM169.116 62.8839L165.884 66.1156L167.652 67.8834L170.884 64.6517L169.116 62.8839ZM174.116 66.1156L170.884 62.8839L169.116 64.6517L172.348 67.8834L174.116 66.1156ZM174.116 66.1156H174.116L172.348 67.8834C173.324 68.8597 174.907 68.8597 175.883 67.8834L174.116 66.1156ZM174.116 66.1156V66.1156L175.883 67.8834C176.86 66.907 176.86 65.3241 175.883 64.3478L174.116 66.1156ZM170.884 62.8839L174.116 66.1156L175.883 64.3478L172.652 61.1161L170.884 62.8839ZM174.243 57.7574L170.884 61.1161L172.652 62.8839L176.01 59.5251L174.243 57.7574ZM174.243 57.7574L176.01 59.5251C176.987 58.5488 176.987 56.9659 176.01 55.9896L174.243 57.7574ZM174.243 57.7574L174.243 57.7574L176.01 55.9896C175.034 55.0133 173.451 55.0133 172.475 55.9896L174.243 57.7574ZM170.884 61.1161L174.243 57.7574L172.475 55.9896L169.116 59.3484L170.884 61.1161ZM165.757 57.7574L169.116 61.1161L170.884 59.3484L167.525 55.9896L165.757 57.7574Z"
        fill="#A4C3FE"
      />
      <path
        // eslint-disable-next-line max-len
        d="M74.4038 76.8284L73.5199 77.7123C74.0081 78.2005 74.7995 78.2005 75.2877 77.7123L74.4038 76.8284ZM72.636 78.5962L73.5199 79.4801C74.0081 78.9919 74.0081 78.2005 73.5199 77.7123L72.636 78.5962ZM74.4038 80.364L75.2877 79.4801C74.7995 78.9919 74.0081 78.9919 73.5199 79.4801L74.4038 80.364ZM76.1716 78.5962L75.2877 77.7123C74.7995 78.2005 74.7995 78.9919 75.2877 79.4801L76.1716 78.5962ZM77.4038 75.5962V75.5962L79.1716 77.364C80.1479 76.3876 80.1479 74.8047 79.1716 73.8284L77.4038 75.5962ZM77.4038 75.5962L79.1716 73.8284C78.1953 72.8521 76.6124 72.8521 75.636 73.8284L77.4038 75.5962ZM75.2877 77.7123L77.4038 75.5962L75.636 73.8284L73.5199 75.9445L75.2877 77.7123ZM71.4038 75.5962L73.5199 77.7123L75.2877 75.9445L73.1716 73.8284L71.4038 75.5962ZM71.4038 75.5962H71.4038L73.1716 73.8284C72.1953 72.8521 70.6124 72.8521 69.636 73.8284L71.4038 75.5962ZM71.4038 75.5962V75.5962L69.636 73.8284C68.6597 74.8047 68.6597 76.3876 69.636 77.364L71.4038 75.5962ZM73.5199 77.7123L71.4038 75.5962L69.636 77.364L71.7522 79.4801L73.5199 77.7123ZM71.4038 81.5962L73.5199 79.4801L71.7522 77.7123L69.636 79.8284L71.4038 81.5962ZM71.4038 81.5962L69.636 79.8284C68.6597 80.8047 68.6597 82.3876 69.636 83.364L71.4038 81.5962ZM71.4038 81.5962H71.4038L69.636 83.364C70.6124 84.3403 72.1953 84.3403 73.1716 83.364L71.4038 81.5962ZM73.5199 79.4801L71.4038 81.5962L73.1716 83.364L75.2877 81.2478L73.5199 79.4801ZM77.4038 81.5962L75.2877 79.4801L73.5199 81.2478L75.636 83.364L77.4038 81.5962ZM77.4038 81.5962L75.636 83.364C76.6124 84.3403 78.1953 84.3403 79.1716 83.364L77.4038 81.5962ZM77.4038 81.5962L79.1716 83.364C80.1479 82.3876 80.1479 80.8047 79.1716 79.8284L77.4038 81.5962ZM75.2877 79.4801L77.4038 81.5962L79.1716 79.8284L77.0555 77.7123L75.2877 79.4801ZM77.4038 75.5962L75.2877 77.7123L77.0555 79.4801L79.1716 77.364L77.4038 75.5962Z"
        fill="#A4C3FE"
      />
      <circle cx="85" cy="66" r="3" fill="#A4C3FE" />
    </svg>
  );
}

export default ErrorBanner;