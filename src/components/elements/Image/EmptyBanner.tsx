import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Empty banner SVG component. Shown when the search result is empty
 *
 * @param {StyleProps} props style props
 * @return {JSX.Element} SVG image as component
 */
function EmptyBanner({ className }: StyleProps): JSX.Element {
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
        d="M93 135H176C179.866 135 183 131.866 183 128C183 124.134 179.866 121 176 121C176 121 170 117.866 170 114C170 110.134 173.952 107 178.826 107H189C192.866 107 196 103.866 196 100C196 96.134 192.866 93 189 93H167C170.866 93 174 89.866 174 86C174 82.134 170.866 79 167 79H207C210.866 79 214 75.866 214 72C214 68.134 210.866 65 207 65H109C105.134 65 102 68.134 102 72C102 75.866 105.134 79 109 79H69C65.134 79 62 82.134 62 86C62 89.866 65.134 93 69 93H94C97.866 93 101 96.134 101 100C101 103.866 97.866 107 94 107H54C50.134 107 47 110.134 47 114C47 117.866 50.134 121 54 121H93C89.134 121 86 124.134 86 128C86 131.866 89.134 135 93 135ZM200 100C200 103.866 203.134 107 207 107C210.866 107 214 103.866 214 100C214 96.134 210.866 93 207 93C203.134 93 200 96.134 200 100Z"
        fill="#F3F7FF"
      />
      <circle
        cx="120.5"
        cy="99.5"
        r="33.5"
        fill="#F3F7FF"
        stroke="#75A4FE"
        strokeWidth="2.5"
      />
      <circle
        cx="120.5"
        cy="99.5"
        r="26.5"
        fill="white"
        stroke="#75A4FE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="107.399"
        cy="122.161"
        rx="3.60172"
        ry="2.08595"
        stroke="#75A4FE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="111.5"
        cy="90.5"
        r="9.5"
        stroke="#A4C3FE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M148 126L154 132" stroke="#75A4FE" strokeWidth="2.5" />
      <path
        // eslint-disable-next-line max-len
        d="M153.03 137.884C151.138 135.992 151.138 132.923 153.03 131.03C154.923 129.138 157.992 129.138 159.884 131.03L170.97 142.116C172.862 144.008 172.862 147.077 170.97 148.97C169.077 150.862 166.008 150.862 164.116 148.97L153.03 137.884Z"
        fill="#E8F0FE"
        stroke="#75A4FE"
        strokeWidth="2.5"
      />
      <path
        d="M158 133L169 144"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        // eslint-disable-next-line max-len
        d="M163.324 89.5C161.944 89.5 160.824 90.6193 160.824 92H163.324V89.5ZM180.5 89.5H163.324V92H180.5V89.5ZM183 92C183 90.6193 181.881 89.5 180.5 89.5V92H183ZM180.5 94.5C181.881 94.5 183 93.3807 183 92H180.5V94.5ZM163.324 94.5H180.5V92H163.324V94.5ZM160.824 92C160.824 93.3807 161.944 94.5 163.324 94.5V92H160.824ZM185.279 89.5C183.898 89.5 182.779 90.6193 182.779 92H185.279V89.5ZM187.5 89.5H185.279V92H187.5V89.5ZM190 92C190 90.6193 188.881 89.5 187.5 89.5V92H190ZM187.5 94.5C188.881 94.5 190 93.3807 190 92H187.5V94.5ZM185.279 94.5H187.5V92H185.279V94.5ZM182.779 92C182.779 93.3807 183.898 94.5 185.279 94.5V92H182.779ZM166 99.7773H166V97.2773C164.619 97.2773 163.5 98.3966 163.5 99.7773H166ZM166 99.7773H166H163.5C163.5 101.158 164.619 102.277 166 102.277V99.7773ZM174.176 99.7773H166V102.277H174.176V99.7773ZM174.176 99.7773V102.277C175.556 102.277 176.676 101.158 176.676 99.7773H174.176ZM174.176 99.7773H176.676C176.676 98.3966 175.556 97.2773 174.176 97.2773V99.7773ZM166 99.7773H174.176V97.2773H166V99.7773Z"
        fill="#A4C3FE"
      />
      <path
        // eslint-disable-next-line max-len
        d="M52.2788 110.5C50.8981 110.5 49.7788 111.619 49.7788 113H52.2788V110.5ZM56.5 110.5H52.2788V113H56.5V110.5ZM59 113C59 111.619 57.8807 110.5 56.5 110.5V113H59ZM56.5 115.5C57.8807 115.5 59 114.381 59 113H56.5V115.5ZM52.2788 115.5H56.5V113H52.2788V115.5ZM49.7788 113C49.7788 114.381 50.8981 115.5 52.2788 115.5V113H49.7788ZM62.3242 110.5C60.9435 110.5 59.8242 111.619 59.8242 113H62.3242V110.5ZM79.5 110.5H62.3242V113H79.5V110.5ZM82 113C82 111.619 80.8807 110.5 79.5 110.5V113H82ZM79.5 115.5C80.8807 115.5 82 114.381 82 113H79.5V115.5ZM62.3242 115.5H79.5V113H62.3242V115.5ZM59.8242 113C59.8242 114.381 60.9435 115.5 62.3242 115.5V113H59.8242ZM76 121.777V119.277C74.6193 119.277 73.5 120.397 73.5 121.777H76ZM76 121.777H73.5C73.5 123.158 74.6193 124.277 76 124.277V121.777ZM84.1758 121.777H76V124.277H84.1758V121.777ZM84.1758 121.777V124.277C85.5565 124.277 86.6758 123.158 86.6758 121.777H84.1758ZM84.1758 121.777H86.6758C86.6758 120.397 85.5565 119.277 84.1758 119.277V121.777ZM76 121.777H84.1758V119.277H76V121.777Z"
        fill="#A4C3FE"
      />
    </svg>
  );
}

export default EmptyBanner;