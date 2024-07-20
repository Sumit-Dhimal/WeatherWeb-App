import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {


    return ( 
        <div className='flex items-center size-fit'>
                    
            {/* position absolute makes the search icon inside the input bar */}
            <FontAwesomeIcon icon={faMagnifyingGlass}
                className='absolute text-gray-600 px-3'
            />
            <input className='bg-gray-200 text-gray-900 p-2 pl-10
             placeholder:text-gray-700 rounded-lg focus:outline-none focus:ring-2 ring-orange-500'
            type="search" 
            placeholder='Search for location'
            />
        </div>
    )
}