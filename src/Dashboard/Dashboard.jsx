import userIcon from '../assets/userIcon.jpg'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'

export default function Dashboard() {

    return (
        <div className="pt-6 pl-16 w-screen">
            {/* for search and user icon*/}
            <div className='flex justify-between pr-10'>
                <div className='flex gap-4'>
                    <img src={userIcon} alt="icon" 
                        className='h-16 rounded-full'
                    />
                    {/* leading = line-height */}
                    <p className='text-3xl leading-7'>Hello,
                        <br />
                        <span className='text-xl font-semibold'>Tatsumaki Fubuki</span> 
                    </p>
                    
                </div>

                {/* for search bar */}
                <SearchBar/>
            </div>

            <div className='flex mt-5'>
                <WeatherCard />
            </div>
            
        </div>
    )
}