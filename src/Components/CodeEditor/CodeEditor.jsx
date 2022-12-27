import { useSelector } from 'react-redux'
import React from 'react'
import CodeEditorNavbar from '../CodeEditorNavbar/CodeEditorNavbar'
import './CodeEditor.css'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'

function CodeEditor() {

  const currentLanguage = useSelector((state)=>state.language.value)

  return (
    <div className='codeWrapper'>
      <CodeEditorNavbar />
      {
        (currentLanguage==="html")?<Html/>:(currentLanguage==="css")?<Css />:<Javascript />
      }
    </div>
  )
}

export default CodeEditor