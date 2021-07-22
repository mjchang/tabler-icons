import * as React from "react";

function IconCut({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-cut" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={17} r={3} /><circle cx={17} cy={17} r={3} /><line x1={9.15} y1={14.85} x2={18} y2={4} /><line x1={6} y1={4} x2={14.85} y2={14.85} /></svg>;
}

export default IconCut;