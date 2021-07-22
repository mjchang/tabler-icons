import * as React from "react";

function IconPokeball({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-pokeball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9} cy={9} r={9} transform="translate(3 3)" /><circle cx={12} cy={12} r={3} /><path d="M3 12h6m6 0h6" /></svg>;
}

export default IconPokeball;