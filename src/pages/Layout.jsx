import { Link } from "react-router-dom"
import homeimg from "../assets/authImage.png"
import healthicon from '../assets/Vector.png'
import CardCarousel from "../components/cardCarousel"

const Layout = ({children}) => {


    return (
        <div>
            <div className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-white">
                <div className="w-full hidden lg:block relative lg:w-1/2">
                    <img src={homeimg} alt="home image" className="w-full" />
                    <div className="absolute top-16 left-24 flex flex-row gap-2">
                            <img src={ healthicon} alt="health icon" className="w-12 h-12" />
                    <h1 className="text-white text-3xl font-semibold">DiagnoAI</h1>
                    
                    </div>
                   
                    <div>
                        <CardCarousel/>
                </div>
                </div>

              
               
                <div className="w-full flex flex-col items-center justify-center px-3 lg:px-1 lg:w-1/2">

                  {children}
                </div>
            </div>
        </div>
    )
}

export default Layout   