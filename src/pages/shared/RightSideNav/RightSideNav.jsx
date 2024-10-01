import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import qimage1 from "/qZone1.png"
import qimage2 from "/qZone2.png"
import qimage3 from "/qZone3.png"


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h1 className="text-3xl">Login with</h1>
                <button className="btn btn-outline text-red-600 w-full">
                    <BsGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline text-blue-600 w-full">
                    <BsGithub />
                    Login with Github
                </button>
            </div>
            {/* find */}

            <div className="p-4  mb-6">
                <h1 className="text-3xl mb-4">Find Us on</h1>
                <a className="p-4 flex gap-2 border rounded-t-lg text-lg items-center" href=""><FaFacebookF className="text-sky-500"></FaFacebookF>FaceBook</a>
                <a className="p-4 flex gap-2 border-x  text-lg items-center" href=""><FaInstagram className="text-pink-500"></FaInstagram>Instagram</a>
                <a className="p-4 flex gap-2 border rounded-b-lg text-lg items-center" href=""><FaTwitter className="text-blue-500"></FaTwitter>Twitter</a>
            </div>
            {/* q zone */}

            <div className="p-4 space-y-3 mb-6">
                <h1 className="text-3xl">Q Zone</h1>
                <img src={qimage1} alt="" />
                <img src={qimage2} alt="" />
                <img src={qimage3} alt="" />
              
            </div>










        </div>
    );
};

export default RightSideNav;