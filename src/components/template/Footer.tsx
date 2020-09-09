import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" style={{ bottom: 0, position: 'fixed', right: 0 }}>
      <div className="container-fluid">
        <span className="nav-item"><a href="https://github.com/rim31" className="nav-link">rim31.github.io</a></span>
        <span className="copyright">©
            <script>document.write(new Date().getFullYear())</script>
            2020 made by
            <a href="https://github.com/rim31"> oseng </a> 😀
          </span>
      </div>
    </footer>
  )
}
