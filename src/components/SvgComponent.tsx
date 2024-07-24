import React from "react";
import { Text } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

const SvgTextGradient = ({ text, style }) => {
  const textProps = {
    x: 0,
    y: 30,
    fontSize: 24,
    fontWeight: "bold",
  };

  return (
    <Svg height="40" width="200">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="blue" stopOpacity="1" />
          <Stop offset="1" stopColor="green" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText {...textProps} fill="url(#grad)">
        {text}
      </SvgText>
    </Svg>
  );
};

export default SvgTextGradient;