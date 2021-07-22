import * as React from "react";

function IconBrandUnsplash({
  size = 20,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-brand-unsplash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" /></svg>;
}

export default IconBrandUnsplash;