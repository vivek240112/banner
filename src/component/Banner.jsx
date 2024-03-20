import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/banner.css';
 
const Banner = ({ jsondata, backgroundImage}) => {
    const {bannerHeight, backgroundColor, color, heading, description, buttons } = jsondata;
 
    useEffect(() => {
        if (backgroundImage) {
            const bannerImage = document.getElementsByClassName("banner-content")[0];
            let imgTag = document.createElement("img");
            imgTag.src = backgroundImage;
            imgTag.className = "banner-img" ;
            imgTag.alt = "banner-img";
            bannerImage.insertAdjacentElement("afterbegin", imgTag);
        }
    }, [backgroundImage]);
 
    const backgroundStyle = {
        bgColor: backgroundImage ? "" : backgroundColor || "bg-dark"
    };
 
    return (
            <section className={`test-banner ${backgroundStyle.bgColor}`} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className={`banner-content px-5 py-3 ${color}`}>
                                <div className="banner-text d-flex flex-column justify-content-center" style={{height: bannerHeight}}>
                                    <h1>{heading}</h1>
                                    <strong><p>{description}</p></strong>
                                    <div>
                                        <button className="btn btn-light mt-5 me-2 mb-2 text-dark">{buttons[0]}</button>
                                        <button className="btn btn-outline-light mt-5 mb-2 ">{buttons[1]}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
 
Banner.defaultProps = {
    jsondata: {
        bannerHeight: "100vh",
        backgroundColor: "bg-dark",
        color: "text-white",
        heading: "Default_Heading",
        description: "Default_Description : You have to paste your description here.",
        buttons: ["Button_1", "Button_2"]
    }
}
 
export default Banner;