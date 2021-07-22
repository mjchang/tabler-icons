import * as React from "react";

function IconChartArea({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-chart-area" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={19} x2={20} y2={19} /><polyline points="4 15 8 9 12 11 16 6 20 10 20 15 4 15" /></svg>;
}

export default IconChartArea;