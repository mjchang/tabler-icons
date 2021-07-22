import * as React from "react";

function IconCornerLeftDownDouble({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-corner-left-down-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4h-6a3 3 0 0 0 -3 3v7" /><path d="M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" /></svg>;
}

export default IconCornerLeftDownDouble;