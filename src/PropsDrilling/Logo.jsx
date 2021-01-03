import React from 'react'
import logo from '../logo.svg'

function Logo(props) {
    return (
        <div>
            <img src={logo} alt={logo} style={{backgroundColor:props.background}}/>
        </div>
    )
}

export default Logo
