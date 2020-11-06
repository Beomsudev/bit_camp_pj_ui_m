import React from 'react'
import {MovieRatingMenu as Menu} from '../components'
import './table.style.css'

const Review = ({children}) => (<>
    <h1>Review</h1>
    <Menu/>
    {children}
</>)

export default Review