import { useState, useRef, useEffect } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import WeatherCard from './WeatherCard';
import ErrorCard from './ErrorCard'

function App() {
    
    const [weatherData, setWeatherData] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    
    const search = useRef()
    let searchTerm;
    
    useEffect(() => {
        
        const errorCard = document.querySelector('#errorCard')
        const weatherCard = document.querySelector('#weatherCard')
        
        if (!errorCard && !weatherCard) {
            return
        } else if (errorCard) {
            applyStyles(errorCard)
        } else {
            applyStyles(weatherCard)
        }
        
    },[errorMessage, weatherData])
    
    
    function handleSubmit(e) {
        e.preventDefault()
        searchTerm = search.current.value
        fetchData(searchTerm)
    }
    
    const fetchData = async (searchTerm) => {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dbcaf16f1d3a49be9f5184154230607&q=${searchTerm}&aqi=no`)
        const data = await response.json()
        
        if (data.error) {
            setErrorMessage(data.error.message)
            setWeatherData({})
            
        } else {
            setErrorMessage('')
            setWeatherData(data)
        }
    }
    
    function handleToggle() {
        setToggle(!toggle)
    }
    
    function applyStyles (element) {
        const container = document.querySelector('.container')
        
        container.style.height = '400px'
        element.classList.add('fadeIn')
    }
    
    return (
        <div className='h-screen flex justify-center items-center bg-emerald-500'>
            <div className='container' >
                
                <form onSubmit={handleSubmit} className='flex justify-center items-center gap-5 text-xl h-12'>
                    <input ref={search} type="text" placeholder='Enter a location' className='appearance-none indent-4 h-12 focus:border-none focus:outline-none focus:ring-0 focus:rounded-sm'/>
                    <IconContext.Provider value={{ size:'1.4rem', className: '' }}>
                        <div className=' h-10 w-10 rounded-full bg-emerald-200 flex justify-center items-center hover:bg-emerald-400 hover:cursor-pointer'>
                            <FaMagnifyingGlass onClick={handleSubmit} className=''/>
                        </div>
                    </IconContext.Provider>
                </form>
                <div className=' h-auto w-full flex flex-col items-center justify-center my-auto'>    
                    {errorMessage != '' && <ErrorCard errorMessage={errorMessage}/>}
                    {weatherData.location && <WeatherCard handleToggle={handleToggle} metric={toggle} {...weatherData}/>}
                </div>
            </div>
        </div>
    )
}

export default App