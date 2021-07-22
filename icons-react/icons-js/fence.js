import * as React from "react";

function IconFence({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-fence" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 12v4h16v-4z" /><path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" /><path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" /></svg>;
}

export default IconFence;