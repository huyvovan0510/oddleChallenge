import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={35} height={35} viewBox="0 0 35 35" fill="none">
      <Path
        d="M8.785 12.541l8.903-7.1 9.115 7.1v15.156h-5.459v-7.313H16.84v7.313H8.785V12.542z"
        fill="#0A3040"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.818 27.25h1.962V14.417a1.697 1.697 0 113.394 0V28.1a2.546 2.546 0 01-2.545 2.546H8.245a2.546 2.546 0 01-2.546-2.546v-14a1.697 1.697 0 013.394 0V27.25h5.179v-7.425c0-1.113.902-2.015 2.015-2.015h5.515c1.113 0 2.016.902 2.016 2.015v7.425zm-6.364-6.257v5.303h3.182v-5.303h-3.182z"
        fill="#0A3040"
      />
      <Path
        d="M17.723 8.665l12.06 10.156a2.333 2.333 0 103.005-3.57L20.593 4.98a4.455 4.455 0 00-5.744.003L2.689 15.253A2.333 2.333 0 005.7 18.819L17.723 8.665z"
        fill="#7ED321"
      />
    </Svg>
  );
};

export default SvgComponent;
