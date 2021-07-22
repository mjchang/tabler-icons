import * as React from "react";

function IconArrowUpRight({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={17} y1={7} x2={7} y2={17} /><polyline points="8 7 17 7 17 16" /></svg>;
}

export default IconArrowUpRight;