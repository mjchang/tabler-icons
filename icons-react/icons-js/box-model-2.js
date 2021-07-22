import * as React from "react";

function IconBoxModel2({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-box-model-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 8h8v8h-8z" /><rect x={4} y={4} width={16} height={16} rx={2} /></svg>;
}

export default IconBoxModel2;