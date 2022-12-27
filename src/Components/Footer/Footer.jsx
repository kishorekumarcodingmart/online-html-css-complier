import React from 'react'
import {useSystemDetails} from '../../Hook/useSystemDetails'
import {useBrowserDetails} from '../../Hook/useBrowserDetails'
import './Footer.css'
import { useSelector } from 'react-redux'

function Footer() {
  let currentLanguage = useSelector((state)=>state.language.value)

  return (
    <footer className='layoutFooter'>
      <div className='systemDetails'>
        OS : <span className='info'>{useSystemDetails()}</span>
      </div>
      <div className='systemDetails'>
        Language : <span className='info'>{currentLanguage}</span>
      </div>
      <div className='browserDetails'>
        Browser : <span className='info'>{useBrowserDetails()}</span>
      </div>
    </footer>
  )
}

export default Footer