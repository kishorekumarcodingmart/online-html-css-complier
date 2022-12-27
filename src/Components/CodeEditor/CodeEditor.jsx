import { useSelector, useDispatch } from 'react-redux'
import {addHtmlCode,addCssCode,addJavascriptCode} from '../../Redux/code'
import React, {useRef, useEffect} from 'react'
import CodeEditorNavbar from '../CodeEditorNavbar/CodeEditorNavbar'
import './CodeEditor.css'
import Editor from '@monaco-editor/react'


function CodeEditor() {

  const editorRef = useRef(null);

  const dispatch = useDispatch()

  const currentLanguage = useSelector((state)=>state.language.value)

  const htmlCode = useSelector((state)=>state.code.html)
  const cssCode = useSelector((state)=>state.code.css)
  const javascriptCode = useSelector((state)=>state.code.javascript)

  const fileObject = {
    "javascript": {
      name: "javascript",
      language: "javascript",
      value: javascriptCode
    },
    "css": {
      name: "css",
      language: "css",
      value: cssCode
    },
    "html": {
      name: "html",
      language: "html",
      value: htmlCode
    }
  }

  const file = fileObject[currentLanguage];

  useEffect(() => {
    editorRef.current?.focus();
  }, [file.name]);

  const setValue = (code) => {
    if(currentLanguage === "html"){
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
        height="87vh"
        theme="vs-dark"
        path={file.name}
        language={file.language}
        value={file.value}
        onMount={(editor) => (editorRef.current = editor)}
        onChange={setValue}
      />
    </div>
  )
}

export default CodeEditor