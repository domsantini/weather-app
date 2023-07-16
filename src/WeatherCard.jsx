import Toggle from './Toggle'
import { IconContext } from 'react-icons'
import { WiStrongWind, WiHumidity } from 'react-icons/wi';

export default function WeatherCard(props) {
         
    return (
        <div id='weatherCard' className='flex flex-col gap-2 items-center px-6 my-auto w-full'>
            
            {props.location.country == 'United States of America' ? 
                <h1 className=''>{`${props.location.name}, ${props.location.region}`}</h1> :
                <h1 className=''>{`${props.location.name}, ${props.location.country}`}</h1>  
            }
            {props.metric == false ? 
                <p className='text-4xl'>{`${props.current.temp_f} °F`}</p> : 
                <p className='text-4xl'>{`${props.current.temp_c} °C`}</p>  
            }
            {props.metric == false ? 
                <p className='text-sm'>{`feels like ${props.current.feelslike_f} °F`}</p> : 
                <p className='text-sm'>{`feels like ${props.current.feelslike_c} °C`}</p> 
                
            }
            <div className='flex items-center mb-5'>    
                <p>{props.current.condition.text}</p>
                <img src={`${props.current.condition.icon}`} className='' />
            </div>
            
            <div id='bottom-row' className='flex items-center justify-between gap-6 mt-auto text-sm leading-none w-full'>
                <div id='left-bottom' className='flex w-full'>
                    <div id='wind' className='flex w-1/2'>
                        <IconContext.Provider value={{ size:'2rem', className:'shrink-0' }}>
                            <WiStrongWind />
                        </IconContext.Provider>
                        
                        {props.metric == false ?
                            <div className=''>
                                <span>{`${props.current.wind_mph}`} </span>
                                <br />
                                <span>mph</span>
                            </div> :
                            <div className=''>
                                <span>{`${props.current.wind_kph}`} </span>
                                <br />
                                <span>kph</span>
                            </div> 
                        }
                    </div>
                    
                    <div id='humidity' className='flex w-1/2'>
                        <IconContext.Provider value={{ size:'2rem', className:'shrink-0' }}>
                            <WiHumidity />
                        </IconContext.Provider>
                        
                        <div className=''>
                            <span>{`${props.current.humidity} %`} </span>
                            <br />
                            <span>humidity</span>
                        </div>
                    </div>
                    
                </div>
                
                <div id="right-bottom" className="">
                    <Toggle handleToggle={props.handleToggle}/>
                </div>
            
            </div>
        </div>    
    )
}