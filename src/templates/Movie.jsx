import React from 'react'
import {RecoMovieMenu as Menu} from '../components'
import './table.style.css'

const Movie = ({children}) => (<>
    <h1>RecoMovie</h1>
    <Menu/>
    {children}
</>)

export default Movie


