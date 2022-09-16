import React from 'react'
import Header from '../../component/Header'
import StoryCompt from './StoryCompt'

export default function Story() {
  return (
    <div>
         <div>
            <Header/>
        </div>
        <div className='mt-4'>
            <StoryCompt/>
        </div>
    </div>
  )
}
