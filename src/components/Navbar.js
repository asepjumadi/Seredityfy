import React,{useEffect,useState} from 'react'
import { Logo } from '../assets/import';
import { useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


export const Navbar = ({type=''}) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickRegister = () => {
        navigate('/signup');
        navigate(0)
    }
    return (
        <nav
        className={`${isScrolled?'bg-slate-900':'bg-gray-800 bg-opacity-20 backdrop-blur-lg'} py-5 ${isScrolled?'fixed top-0':''} w-full z-50 transition duration-500 ease-in-out ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 mx-auto">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-xl justify-between flex"> <img src={Logo} className='w-6 h-6 mr-4' alt={`${Logo} seredityfy `} /> <span>Seredityfy </span></a>
                    </div>
                    <div className='block md:hidden'>
                        {
                            toggle ?
                                <RiCloseLine color={`${isScrolled?'white':type=='update'?'grey':'black'}`} size={27} onClick={() => setToggle(false)} />
                                :
                                <RiMenu3Line color={`${isScrolled?'white':type=='update'?'grey':'black'}`} size={27} onClick={() => setToggle(true)} />
                        }
                    </div>
                    <div className="hidden md:block  ">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/features" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="/update" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Update</a>
                            <a href="/price" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Price</a>
                            <div className="p-0.5 rounded bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-500">
                                <button className="px-6 py-2 text-white bg-gray-800 bg-opacity-90 backdrop-blur-xl text-xs" onClick={() => handleClickRegister()}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {
                toggle && <div className="
                z-50
                transform after:translate-y-4 before::translate-y-6
                transition duration-500 ease-in-out                
                block md:hidden h-100 w-4/6 right-2 top-[80px] fixed">
                    <div className="flex flex-col items-end lg:items-stretch py-10 px-10 lg:py-0 lg:mx-20 mt-[2px] lg:w-3/12 lg:h-[540px] lg:mb-[100px] bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-sm shadow-white space-x-4">
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white py-4 rounded-md text-xl font-bold tracking-widest">Home</a>
                        <a href="/features" className="text-gray-300 hover:bg-gray-700 hover:text-white py-4 rounded-md text-xl font-bold tracking-widest">Features</a>
                        <a href="/update" className="text-gray-300 hover:bg-gray-700 hover:text-white py-4 rounded-md text-xl font-bold tracking-widest">Update</a>
                        <a href="/price" className="text-gray-300 hover:bg-gray-700 hover:text-white py-4 rounded-md text-xl font-bold tracking-widest">Price</a>
                        <div className="p-0.5 rounded w-[121.5px] bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-500">
                            <button className="px-6 py-2 text-white bg-gray-800 bg-opacity-90 backdrop-blur-xl text-xl" onClick={() => handleClickRegister()}>Sign Up</button>
                        </div>
                    </div>
                </div>

            }

        </nav>
    )
}

//bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-100