import * as React from "react";

function IconOverline({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-overline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9v5a5 5 0 0 0 10 0v-5" /><path d="M5 5h14" /></svg>;
}

export default IconOverline;