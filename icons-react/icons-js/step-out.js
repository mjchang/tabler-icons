import * as React from "react";

function IconStepOut({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-step-out" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={3} x2={12} y2={15} /><line x1={16} y1={7} x2={12} y2={3} /><line x1={8} y1={7} x2={12} y2={3} /><circle cx={12} cy={20} r={1} /></svg>;
}

export default IconStepOut;