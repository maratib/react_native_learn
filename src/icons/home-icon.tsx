import React from "react"
import Svg, { Path } from "react-native-svg"

type Props = {
    size?: number;
    color?: string;
  };

export const HomeIcon = ({size = 24, color = 'none'}: Props) => {
  return (
    <Svg
      
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  )
}


