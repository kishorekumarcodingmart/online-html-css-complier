import React from 'react'
import Editor from '@monaco-editor/react'
import { useDispatch, useSelector } from 'react-redux'
import { addCssCode } from '../../Redux/code'

function Css() {

    const cssCode = useSelector((state)=>state.code.css)

    const dispatch = useDispatch()

  return (
    <Editor 
        value={cssCode}
        height="87vh"
        theme='vs-dark'
        language="css"
        options={{
          scrollBeyondLastLine:false,
          fontSize:"16px"
        }}
        onChange={(code)=> dispatch(addCssCode(code))}

      />
  )
}

export default Css