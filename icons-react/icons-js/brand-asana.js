import * as React from "react";

function IconBrandAsana({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-brand-asana" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={7} r={3} /><circle cx={17} cy={16} r={3} /><circle cx={7} cy={16} r={3} /></svg>;
}

export default IconBrandAsana;