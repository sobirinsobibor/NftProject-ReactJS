import React from 'react'
import Header from '../../component/Header'
import FormCompt from './FormCompt'

export default function Claim() {
  return (
    <div>
         <div>
            <Header/>
        </div>
        <div className='mt-5' >
            <FormCompt/>
        </div>
    </div>
  )
}
