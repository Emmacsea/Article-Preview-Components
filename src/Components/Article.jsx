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
        <div className="font-body bg-primary-lgrayishblue flex justify-center items-center h-screen w-full md:px-96 px-6">
            <div className="flex md:flex-row flex-col justify-center items-start ">
                <div className="w-full ">
                <div><img className="md:rounded-s-lg rounded-t-lg md:rounded-t-none w-full md:h-72" src={drawer} alt="" /></div>
                </div>

                <div className="relative md:rounded-e-lg rounded-b-lg md:rounded-b-none bg-white py-6 md:px-5 px-6 md:h-72 md:w-full">
                    <div className="flex flex-col  space-y-4">
                    <h3 className="text-primary-vdgrayishblue font-bold md:text-lg text-base">
                        Shift the overall look and feel by adding 
                        these wonderful touches to furniture in your home
                    </h3>
                    <p className="text-primary-grayishblue md:text-xs text-sm font-medium">
                        Ever been in a room and felt like something was missing? Perhaps it 
                        felt slightly bare and uninviting. I&apos;ve got some simple tips to 
                        help you make any room feel complete.
                    </p>
                    </div>

                    <div className="flex justify-between items-center md:mt-0 mt-5">
                        <div className="md:mt-4 flex space-x-3 items-center">
                            <div className=""><img className="rounded-full md:w-9 md:h-9 w-6 h-6" src={avatar} alt="" /></div>
                            <div className="flex flex-col md:space-y-1">
                                <p className="text-primary-vdgrayishblue md:text-base text-sm font-bold  md:font-medium">
                                    Michelle Appleton
                                </p>
                                <span className="text-primary-grayishblue text-xs font-bold">28 Jun 2020</span>

                            </div>
                        </div>

                                                
                            {isIcon && (
                                <div className="absolute md:left-60 left-0 right-0 bottom-0 md:bottom-20 bg-primary-vdgrayishblue md:py-3 py-4 px-6 md:rounded-lg rounded-b-lg sm:h-20 md:h-auto flex justify-between items-center md:w-48 w-full">
                                <div className="flex md:space-x-3 space-x-4">
                                <span className="text-primary-grayishblue md:tracking-normal tracking-widest uppercase font-light text-base">Share</span>
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
                                <button type="click" onClick={handleClick} className={`md:hidden rounded-full md:w-7 md:h-7 w-6 h-6 flex justify-center items-center 
                            ${isIcon ? "bg-primary-lgrayishblue" : "bg-primary-vdgrayishblue"}`}>
                            <img className={`md:w-4 w-3 ${isIcon ? "text-white" : "text-primary-vdgrayishblue"} `} src={share} alt="" />
                        </button>
                            </div>
                            )}
                        

                        <button type="click" onClick={handleClick} className={` rounded-full md:w-7 md:h-7 w-6 h-6 flex justify-center items-center 
                            ${isIcon ? "bg-primary-vdgrayishblue" : "bg-primary-lgrayishblue"}`}>
                            <img className={`md:w-4 w-3 ${isIcon ? "text-white" : "text-primary-vdgrayishblue"} `} src={share} alt="" />
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