import * as React from "react";

function IconCurrencyKroneSwedish({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-currency-krone-swedish" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 6v12" /><path d="M5 12c3.5 0 6 -3 6 -6" /><path d="M5 12c3.5 0 6 3 6 6" /><path d="M15 10v8" /><path d="M19 10a4 4 0 0 0 -4 4" /></svg>;
}

export default IconCurrencyKroneSwedish;