import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={35} height={35} viewBox="0 0 35 35" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.14 27.462h1.962V14.627a1.697 1.697 0 113.395 0v13.684a2.546 2.546 0 01-2.546 2.545H8.567a2.546 2.546 0 01-2.546-2.546v-14a1.697 1.697 0 113.395 0v13.152h5.178v-7.425c0-1.113.902-2.015 2.015-2.015h5.516c1.113 0 2.015.902 2.015 2.015v7.425zm-6.364-6.258v5.303h3.182v-5.303h-3.182z"
        fill="#0A3040"
      />
      <Path
        d="M18.046 8.877l12.059 10.155a2.333 2.333 0 103.006-3.57L20.915 5.192a4.455 4.455 0 00-5.744.004L3.011 15.464a2.334 2.334 0 103.012 3.566L18.046 8.877z"
        fill="#0A3040"
      />
    </Svg>
  );
};

export default SvgComponent;
