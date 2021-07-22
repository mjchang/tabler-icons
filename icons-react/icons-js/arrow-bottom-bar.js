import * as React from "react";

function IconArrowBottomBar({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-bottom-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3v18" /><path d="M9 18l3 3l3 -3" /><path d="M9 3h6" /></svg>;
}

export default IconArrowBottomBar;