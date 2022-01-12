import * as React from "react"
import { Helmet } from "react-helmet"
import { settings } from "../data/settings"
import imgFavicon from '../images/favicon.png'
import imgOpenGraph from '../images/opengraph.jpg'

const style = {
  title: {
    fontSize: "2em",
  },
  item: {
    cursor: "default",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    border: "1px solid #ccc",
    borderRadius: "0.5em",
    backgroundColor: "rgba(0,0,0,0.25)",
    marginBottom: "1em",
    overflow: "hidden",
    link: {
      fontFamily: "'Share Tech Mono', monospace",
      backgroundColor: "rgba(255,255,255,0.75)",
      borderRight: "1px solid #333",
      minWidth: "3em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      a: {
        color: "#333",
        margin: "0.5em",
        textDecoration: "none",
        fontWeight: "bold",
      }
    },
    title: {
      fontSize: "1.2em",
      margin: "0.5em",
      overflow: "auto",
    }
  },
}

const ebooks = [
  {
    title: "Git para iniciantes: O que você deveria saber?",
    slug: "git",
    lang: "",
  },
  {
    title: "Padrões de Projeto: Soluções reutilizáveis de software orientado a objetos",
    slug: "gof",
    lang: "",
  },
  {
    title: "New Relic: The Complete Introduction to New Relic One [With APM]",
    slug: "course-complete-introduction-new-relic-one",
    lang: "",
  },
  {
    title: "JavaScript e ElasticSearch: Enviando console.log para o banco de dados",
    slug: "javascript-console-log-elasticsearch",
    lang: "",
  },
  {
    title: "Acesso remoto SSH com senha ou chaves de criptografia",
    slug: "ssh-password-or-keys",
    lang: "",
  },
  {
    title: "SSH remote access with password or encryption keys",
    slug: "ssh-password-or-keys",
    lang: "en",
  },
  {
    title: "Comparação de Segurança: Protocolos SSH Versus Telnet",
    slug: "ssh-telnet-protocols",
    lang: "",
  },
  {
    title: "Security Comparison: SSH and Telnet Protocols",
    slug: "ssh-telnet-protocols",
    lang: "en",
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
      <h1 style={style.title}>{ settings.title }</h1>
      {ebooks.map(ebook => (
        <article key={ebook.slug} style={style.item}>
          <span style={style.item.link}><a style={style.item.link.a} href={`/${ebook.lang}/${ebook.slug}`.replaceAll('//', '/')}>html</a></span>
          <span style={style.item.link}><a style={style.item.link.a} href={`/${ebook.lang}/${ebook.slug}.pdf`.replaceAll('//', '/')}>pdf</a></span>
          <h2 style={style.item.title}>{ebook.title}</h2>
        </article>
      ))}
    </main>
  )
}

export default IndexPage
