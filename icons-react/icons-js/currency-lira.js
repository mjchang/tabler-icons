import * as React from "react";

function IconCurrencyLira({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-currency-lira" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5v15a7 7 0 0 0 7 -7" /><path d="M6 15l8 -4" /><path d="M14 7l-8 4" /></svg>;
}

export default IconCurrencyLira;