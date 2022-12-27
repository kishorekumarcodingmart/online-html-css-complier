import React from 'react'
import Editor from '@monaco-editor/react'
import { useDispatch, useSelector } from 'react-redux'
import { addJavascriptCode } from '../../Redux/code'

function Javascript() {

    const javascriptCode = useSelector((state)=>state.code.javascript)

    const dispatch = useDispatch()

  return (
    <Editor 
        value={javascriptCode}
        height="87vh"
        theme='vs-dark'
        language="javascript"
        options={{
          scrollBeyondLastLine:false,
          fontSize:"16px"
        }}
        onChange={(code)=> dispatch(addJavascriptCode(code))}

      />
  )
}

export default Javascript