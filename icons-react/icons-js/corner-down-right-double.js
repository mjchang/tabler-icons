import * as React from "react";

function IconCornerDownRightDouble({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-corner-down-right-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5v6a3 3 0 0 0 3 3h7" /><path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" /></svg>;
}

export default IconCornerDownRightDouble;