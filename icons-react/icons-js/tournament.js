import * as React from "react";

function IconTournament({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-tournament" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" /><path d="M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" /><path d="M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4" /><line x1={15} y1={12} x2={20} y2={12} /></svg>;
}

export default IconTournament;