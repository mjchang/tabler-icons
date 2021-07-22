import * as React from "react";

function IconLayoutGridAdd({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-layout-grid-add" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={6} height={6} rx={1} /><rect x={14} y={4} width={6} height={6} rx={1} /><rect x={4} y={14} width={6} height={6} rx={1} /><path d="M14 17h6m-3 -3v6" /></svg>;
}

export default IconLayoutGridAdd;