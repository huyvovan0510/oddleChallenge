import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.788 11.472l6.209 6.886 6.215-6.878c1.05-1.162 1.05-3.1 0-4.262l1.484-1.34c1.738 1.923 1.738 5.02 0 6.943l-6.958 7.7a1 1 0 01-1.485 0l-6.95-7.71c-1.736-1.925-1.738-5.02 0-6.944 1.738-1.923 4.537-1.923 6.275 0l1.426 1.578 1.417-1.568c1.739-1.923 4.537-1.923 6.275 0l-1.484 1.341c-.944-1.045-2.363-1.045-3.307 0l-2.9 3.21-2.91-3.22c-.945-1.044-2.364-1.044-3.308 0-1.049 1.161-1.05 3.098.001 4.264zm6.95 7.709v-.001z"
        fill="#0A3040"
      />
    </Svg>
  );
};

export default SvgComponent;
