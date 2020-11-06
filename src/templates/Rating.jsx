import React from 'react'
import {MovieRatingMenu as Menu} from '../components'
import './table.style.css'

const Rating = ({children}) => (<>
    <h1>Movie</h1>
    <Menu/>
    {children}
</>)

export default Rating


