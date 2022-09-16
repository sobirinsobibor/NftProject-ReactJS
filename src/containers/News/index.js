import React from 'react'
import './index.css'
import Header from '../../component/Header'
import SliderCard from './SliderCard'

export default function News() {
  return (
    <div>
         <div>
            <Header/>
        </div>
        <div className='content-width mt-5' >
          <SliderCard/>
        </div>
    </div>
  )
}
