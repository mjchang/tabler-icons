import * as React from "react";

function IconBrandOpera({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-brand-opera" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><ellipse cx={12} cy={12} rx={3} ry={5} /></svg>;
}

export default IconBrandOpera;