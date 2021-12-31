import * as React from "react"
import { Helmet } from "react-helmet"
import { settings } from "../data/settings"
import imgFavicon from '../images/favicon.png'
import imgOpenGraph from '../images/opengraph.jpg'

const style = {
  h1: {
    fontSize: "2em",
  },
}

const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <title>{ settings.title }</title>

        <meta charSet="UTF-8" />

        <meta name="theme-color" content={ settings.browserColor } />

        <meta property="og:locale" content={ settings.locale } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ settings.name } />
        <meta property="og:description" content={ settings.description } />
        <meta property="og:url" content={ settings.url } />
        <meta property="og:site_name" content={ settings.title } />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={ `${settings.url}/${imgOpenGraph}` } />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ settings.name } />
        <meta name="twitter:description" content={ settings.description } />

        <link rel="shortcut icon" href={imgFavicon} />

      </Helmet>
      <h1 style={style.h1}>{ settings.title }</h1>
      Oops! 404 - Page not found.
    </main>
  )
}

export default NotFoundPage
