import React from 'react'
import Editor from '@monaco-editor/react'
import { useDispatch, useSelector } from 'react-redux'
import { addHtmlCode } from '../../Redux/code'

function Html() {

    const htmlCode = useSelector((state)=>state.code.html)

    const dispatch = useDispatch()

  return (
    <Editor 
        value={htmlCode}
        height="87vh"
        theme='vs-dark'
        language="html"
        options={{
          scrollBeyondLastLine:false,
          fontSize:"16px"
        }}
        onChange={(code)=> dispatch(addHtmlCode(code))}

      />
  )
}

export default Html