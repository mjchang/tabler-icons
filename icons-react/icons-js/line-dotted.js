import * as React from "react";

function IconLineDotted({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-line-dotted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 12v.01" /><path d="M8 12v.01" /><path d="M12 12v.01" /><path d="M16 12v.01" /><path d="M20 12v.01" /></svg>;
}

export default IconLineDotted;