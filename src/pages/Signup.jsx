import { Link } from "react-router-dom"
import homeimg from "../assets/authImage.png"
import healthicon from '../assets/Vector.png'
import CardCarousel from "../components/cardCarousel"
import FormData from "../components/FormData"

const Signup = () => {


    return (
        <div>
            <div className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-white">
                {/* <div className="w-full hidden lg:block relative lg:w-1/2"> */}
                <div className="background-image hidden lg:flex lg:flex-row lg:justify-center lg:items-end lg:w-1/2">
                <div className="absolute top-16 left-6 flex flex-row gap-2">
                            <img src={ healthicon} alt="health icon" className="w-12 h-12" />
                    <h1 className="text-white text-3xl font-semibold">DiagnoAI</h1>
                    
                    </div>
                   
                    <div>
                        <CardCarousel/>
                    </div>
                </div>

              
               
                <div className="w-full px-12 py-12 flex flex-col items-center justify-center lg:px-1 lg:w-1/2">

                    <div className="w-96">
                   
                        <h1 className="text-textprimary font-bold text-5xl">Create account</h1>
                        <p className="text-textgray my-1 text-sm">Lets get you up and running with DiagnoAI</p>
                        
                        
              <div>
                <FormData />
                       </div>

                        <p className="text-textgreen flex flex-row gap-2 mt-3">
                        Already have an account?<br />
                          <Link to="/login">
                          <span className="text-lightgreen">Login</span>
                           </Link>
                        </p>
               </div>
                </div>
            </div>
        </div>
    )
}

export default Signup