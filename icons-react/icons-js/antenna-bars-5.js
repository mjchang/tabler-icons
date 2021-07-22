import * as React from "react";

function IconAntennaBars5({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-antenna-bars-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={6} y1={18} x2={6} y2={15} /><line x1={10} y1={18} x2={10} y2={12} /><line x1={14} y1={18} x2={14} y2={9} /><line x1={18} y1={18} x2={18} y2={6} /></svg>;
}

export default IconAntennaBars5;