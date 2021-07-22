import * as React from "react";

function IconCurrencyLitecoin({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-currency-litecoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" /><path d="M14 9l-9 4" /></svg>;
}

export default IconCurrencyLitecoin;