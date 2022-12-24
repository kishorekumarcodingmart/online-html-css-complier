import React from 'react'
import CodeEditor from '../CodeEditor/CodeEditor'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Output from '../Output/Output'
import './Layout.css'

function Layout() {
  return (
    <main className='layoutWrapper'>
      <Navbar />
      <section className='layoutSection'>
          <CodeEditor />  
          <Output />
      </section>
      <Footer />
    </main>
  )
}

export default Layout