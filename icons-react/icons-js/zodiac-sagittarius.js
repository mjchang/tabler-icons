import * as React from "react";

function IconZodiacSagittarius({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-zodiac-sagittarius" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={20} x2={20} y2={4} /><path d="M13 4h7v7" /><line x1={6.5} y1={12.5} x2={11.5} y2={17.5} /></svg>;
}

export default IconZodiacSagittarius;