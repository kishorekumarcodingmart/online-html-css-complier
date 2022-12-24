import React from 'react'
import { useDispatch } from 'react-redux'
import {changeToHtml, changeToCss, changeToJavascript} from '../../Redux/language'
import { CodeEditorNavbarData } from '../../Data/CodeEditorNavbar'
import './CodeEditorNavbar.css'

function CodeEditorNavbar() {

  const dispatch = useDispatch()

  const changeLanguage = (language) => {
    (language==="html")?dispatch(changeToHtml()):(language==="css")?dispatch(changeToCss()):dispatch(changeToJavascript())
  }
  
  return (
    <nav className='codeEditorNavbar'>
        {
          CodeEditorNavbarData.map((val,index)=>{
            return (
              <div className='tab' key={index} onClick={()=>changeLanguage(val.fileType.toLowerCase())}>
                <div className='fileLogo'>
                  <img className='fileImageLogo' src={val.imgsrc} alt={val.alt} loading='lazy' />
                </div>
                <span className='fileType'>{val.fileType}</span>
              </div>
            )
          })
        }
      </nav>
  )
}

export default CodeEditorNavbar