import * as React from "react";

function IconSpace({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-space" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 10v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-3" /></svg>;
}

export default IconSpace;