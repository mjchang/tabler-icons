import * as React from "react";

function IconArrowsDoubleNeSw({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrows-double-ne-sw" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 14l11 -11" /><path d="M10 3h4v4" /><path d="M10 17v4h4" /><path d="M21 10l-11 11" /></svg>;
}

export default IconArrowsDoubleNeSw;