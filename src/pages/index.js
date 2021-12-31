import * as React from "react"
import { Helmet } from "react-helmet"
import { settings } from "../data/settings"
import imgFavicon from '../images/favicon.png'
import imgOpenGraph from '../images/opengraph.jpg'

const style = {
  h1: {
    fontSize: "2em",
  },
  h2: {
    a: {
      color: "#000",
      textDecoration: "none",
    },
    label: {
      position: "relative",
      top: "-0.1em",
      fontFamily: "'Share Tech Mono', monospace",
      backgroundColor: "gray",
      marginRight: "0.5em",
      borderRadius: "0.5em",
      padding: "0.1em 0.5em 0.25em 0.5em",
      a: {
        color: "white",
        textDecoration: "none",
        fontSize: "0.75em",
      },
    }
  }
}

const ebooks = [
  {
    title: "Git para iniciantes: O que você deveria saber?",
    slug: "git-o-que-voce-deveria-saber"
  },
  {
    title: "Padrões de Projeto: Soluções reutilizáveis de software orientado a objetos",
    slug: "book-padroes-de-projeto"
  },
  {
    title: "New Relic: The Complete Introduction to New Relic One [With APM]",
    slug: "course-complete-introduction-new-relic-one"
  },
  {
    title: "JavaScript e ElasticSearch: Enviando console.log para o banco de dados",
    slug: "javascript-console-log-com-elasticsearch"
  },
  {
    title: "Acesso remoto SSH com senha ou chaves de criptografia",
    slug: "ssh-password-or-keys-pt"
  },
  {
    title: "SSH remote access with password or encryption keys",
    slug: "ssh-password-or-keys-en"
  },
  {
    title: "Comparação de Segurança: Protocolos SSH Versus Telnet",
    slug: "ssh-telnet-protocols-pt"
  },
  {
    title: "Security Comparison: SSH and Telnet Protocols",
    slug: "ssh-telnet-protocols-en"
  },
]

// markup
const IndexPage = () => {
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
      {ebooks.map(ebook => (
        <h2 key={ebook.slug} style={style.h2}>
          <span style={style.h2.label}><a style={style.h2.label.a} href={`/${ebook.slug}.html`}>html</a></span>
          <span style={style.h2.label}><a style={style.h2.label.a} href={`/${ebook.slug}.pdf`}>pdf</a></span>
          {ebook.title}
        </h2>
      ))}
    </main>
  )
}

export default IndexPage
