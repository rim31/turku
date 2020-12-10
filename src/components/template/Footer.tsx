import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" style={{ bottom: 0, position: 'fixed', right: 0 }}>
      <div className="container-fluid">

        {/* just my CV if you want to hire me */}
        <span className="nav-item"><a href="https://github.com/rim31" className="nav-link">rim31.github.io</a></span>
        <span className="copyright">© 2020 made by
            <a href="https://linkedin.com/in/rim31"> oseng </a> 😀
          </span>
      </div>
    </footer>
  )
}
