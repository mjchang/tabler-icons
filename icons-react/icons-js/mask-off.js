import * as React from "react";

function IconMaskOff({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-mask-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.42 19.41a2 2 0 0 1 -1.42 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.055 .588 -1.417m3.412 -.583h10a2 2 0 0 1 2 2v10" /><path d="M9.885 9.872a3 3 0 1 0 4.245 4.24m.582 -3.396a3.012 3.012 0 0 0 -1.438 -1.433" /><path d="M3 3l18 18" /></svg>;
}

export default IconMaskOff;