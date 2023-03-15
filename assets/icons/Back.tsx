import { Svg, Path } from "react-native-svg";

import { ISVGProps } from ".";
import { useAppSettings } from "../../src/context";


export const Back = ({ style, height = 19, width = 11 }: ISVGProps) => {
  const { theme } = useAppSettings()
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 11 19`}
      style={style}
    >
      <Path
        d="M3.31954 9.5L10.5973 2.31679C11.1342 1.78679 11.1342 0.927495 10.5973 0.397498C10.0603 -0.132499 9.1897 -0.132499 8.65273 0.397498L0.402728 8.54035C-0.134243 9.07035 -0.134243 9.92965 0.402728 10.4596L8.65273 18.6025C9.1897 19.1325 10.0603 19.1325 10.5973 18.6025C11.1342 18.0725 11.1342 17.2132 10.5973 16.6832L3.31954 9.5Z"
        fill={theme.contrast}
      />
    </Svg>
  );
};
