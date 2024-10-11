import { useState } from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import share from "../assets/images/icon-share.svg";
import drawer from "../assets/images/drawers.jpg";
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

export const Article = ({onClickShare}) => {
    const [isIcon, setIsIcon] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setIsIcon(!isIcon);

        onClickShare();
    }

    return(
        <div className="font-body bg-primary-lgrayishblue flex justify-center items-center h-screen w-full px-96">
            <div className="flex justify-center items-start ">
                <div className="w-full ">
                <div><img className="rounded-s-lg  h-60" src={drawer} alt="" /></div>
                </div>

                <div className="relative rounded-e-lg bg-white py-4 px-5 h-60">
                    <div className="flex flex-col space-y-3">
                    <h3 className="text-primary-vdgrayishblue font-bold text-lg">
                        Shift the overall look and feel by adding 
                        these wonderful touches to furniture in your home
                    </h3>
                    <p className="text-primary-grayishblue text-xs font-medium">
                        Ever been in a room and felt like something was missing? Perhaps it 
                        felt slightly bare and uninviting. I&apos;ve got some simple tips to 
                        help you make any room feel complete.
                    </p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="mt-5 flex space-x-3 items-center">
                            <div className=""><img className="rounded-full w-9 h-9" src={avatar} alt="" /></div>
                            <div className="flex flex-col space-y-1">
                                <p className="text-primary-vdgrayishblue text-base font-medium">
                                    Michelle Appleton
                                </p>
                                <span className="text-primary-grayishblue text-xs font-bold">28 Jun 2020</span>

                            </div>
                        </div>

                        
                            {isIcon && (
                                <div className="absolute left-60 bottom-20 bg-primary-vdgrayishblue py-2 px-6 rounded-lg flex space-x-3 w-48">
                                <span className="text-primary-grayishblue uppercase font-light text-base">Share</span>
                                <div className="flex space-x-4 items-center">
                                    <a href="http://www.facebook.com" target="_blank">
                                        <FaFacebookF className="bg-white text-primary-vdgrayishblue text-base"/>
                                    </a>
                                    <a href="http://www.x.com" target="_blank">
                                        <FaTwitter className="bg-transparent text-white text-base"/>
                                    </a>
                                    <a href="http://www.pinterest.com" target="_blank">
                                        <FaPinterest className="bg-white text-primary-vdgrayishblue text-base"/>
                                    </a>
                                </div>
                            </div>
                            )}
                        

                        <button type="click" onClick={handleClick} className={` rounded-full w-7 h-7 flex justify-center items-center 
                            ${isIcon ? "bg-primary-vdgrayishblue" : "bg-primary-lgrayishblue"}`}>
                            <img className={`w-4 ${isIcon ? "text-white" : "text-primary-vdgrayishblue"} `} src={share} alt="" />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
Article.propTypes = {
    onClickShare: PropTypes.func.isRequired,
}