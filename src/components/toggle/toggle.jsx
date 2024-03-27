import React, { useContext } from 'react'
import './toggle.css'
import {ThemeContext} from '../../context'

export const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"});
    }

  return (
    <div className='t'>
        <div className="t-wrapper">
            <p className="t-icon"><i class="fa-solid fa-moon"></i></p>
            <p className="t-icon" style={{color: theme.state.darkmode && "black"}}><i class="fa-solid fa-sun"></i></p>
        </div>
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkmode ? 0 : 25}}></div>
    </div>
  )
}
