import React, {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import './Output.css'

function Output() {

  const [srcDoc, setSrcDoc] = useState('')

  const sandbox = [
    'allow-scripts',
    'allow-forms',
    'allow-modals',
    'allow-orientation-lock',
    'allow-pointer-lock',
    'allow-popups',
    'allow-popups-to-escape-sandbox',
    'allow-presentation',
    'allow-same-origin',
    'allow-scripts',
    'allow-top-navigation',
    'allow-top-navigation-by-user-activation'
  ]

  const html = useSelector((state)=>state.code.html)
  const css = useSelector((state)=>state.code.css)
  const js = useSelector((state)=>state.code.javascript)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className='output'>
      <iframe 
        srcDoc={srcDoc}
        className='iframeOutput' 
        title="output" 
        sandbox={sandbox.join(" ")}
        ></iframe>
    </div>
  )
}

export default Output