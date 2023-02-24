import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MARKPRO-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
  ])
}
