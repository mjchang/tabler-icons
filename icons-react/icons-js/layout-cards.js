import * as React from "react";

function IconLayoutCards({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-layout-cards" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={6} height={16} rx={2} /><rect x={14} y={4} width={6} height={10} rx={2} /></svg>;
}

export default IconLayoutCards;