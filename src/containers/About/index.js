import React from 'react'
import "./index.css"
import Header from '../../component/Header'
import ContentCompt from './ContentCompt'

export default function About() {
  return (
    <div  >
         <div>
            <Header/>
        </div>
        <div>
          <ContentCompt/>
        </div>
    </div>
  )
}
