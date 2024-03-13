import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Ray2 = (props: SvgProps) => (
  <Svg
    width={360}
    height={494}
    fill="none"
    {...props}
  >
    <G filter="url(#a)" opacity={0.6}>
      <Path
        fill="url(#b)"
        fillOpacity={0.6}
        d="M-42.32 268.409 339.614-10.103l31.359 16.51-186.752 457.027-226.54-195.025Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={364.102}
        x2={188.142}
        y1={21.72}
        y2={415.165}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4FB54" />
        <Stop offset={1} stopColor="#131415" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Ray2
