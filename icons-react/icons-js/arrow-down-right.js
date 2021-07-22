import * as React from "react";

function IconArrowDownRight({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-down-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={7} x2={17} y2={17} /><polyline points="17 8 17 17 8 17" /></svg>;
}

export default IconArrowDownRight;