import Editor from '@monaco-editor/react'
import { useSelector, useDispatch } from 'react-redux'
import {useCurrentCode} from '../../Hook/useCurrentCode'
import {addHtmlCode, addCssCode, addJavascriptCode} from '../../Redux/code'
import React from 'react'
import CodeEditorNavbar from '../CodeEditorNavbar/CodeEditorNavbar'
import './CodeEditor.css'

function CodeEditor() {

  const dispatch = useDispatch()

  const currentLanguage = useSelector((state)=>state.language.value)

  const updateCode = (code) => {
    if (currentLanguage === "html"){
      dispatch(addHtmlCode(code))
    }
    else if (currentLanguage === "css"){
      dispatch(addCssCode(code))
    }
    else {
      dispatch(addJavascriptCode(code))
    }
  }

  return (
    <div className='codeWrapper'>
      <CodeEditorNavbar />
      <Editor 
        value={useCurrentCode()}
        height="87vh"
        theme='vs-dark'
        language={currentLanguage}
        options={{
          scrollBeyondLastLine:false,
          fontSize:"16px"
        }}
        onChange={(code)=> updateCode(code)}

      />
    </div>
  )
}

export default CodeEditor