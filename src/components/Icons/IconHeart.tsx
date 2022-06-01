import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M4.303 12.811l7.692 8.532 7.701-8.522c1.738-1.923 1.738-5.02 0-6.944-1.738-1.923-4.536-1.923-6.275 0l-1.417 1.568-1.426-1.578c-1.738-1.923-4.537-1.923-6.275 0-1.738 1.924-1.736 5.019 0 6.944z"
        fill="#D0021B"
      />
    </Svg>
  );
};

export default SvgComponent;
