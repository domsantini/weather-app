import React from 'react'
import './toggle.css'

export default function Toggle(props) {
    
    return (
        <div className='smaller-contain shrink-0'>    
            <input type="checkbox" id='check' onClick={props.handleToggle}/>
            <label htmlFor="check" className='button' >
                <div className='far'>°F</div>
                <div className='cel'>°C</div>
            </label>    
        </div> 
    )    
}