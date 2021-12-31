import * as React from "react"

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
      fontFamily: "monospace",
      backgroundColor: "gray",
      marginRight: "0.5em",
      borderRadius: "0.5em",
      padding: "0.1em 0.5em 0.25em 0.5em",
      a: {
        color: "white",
        textDecoration: "none",
        fontSize: "0.8em",
      }
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
    slug: "ssh-telnet-protocols-pt"
  },
  {
    title: "SSH remote access with password or encryption keys",
    slug: "ssh-telnet-protocols-en"
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
      <h1 style={style.h1}>ebooks.sergiocabral.com</h1>
      {ebooks.map(ebook => (
        <h2 style={style.h2}>
          <label style={style.h2.label}><a style={style.h2.label.a} href={`/${ebook.slug}.html`}>html</a></label>
          <label style={style.h2.label}><a style={style.h2.label.a} href={`/${ebook.slug}.pdf`}>pdf</a></label>
          {ebook.title}
        </h2>
      ))}
    </main>
  )
}

export default IndexPage
