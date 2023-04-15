import React from "react";

export default function Contact(){
    return (
        <div className="pg">
        <h1>contact</h1>
        <img src="tele.jpg" alt="freelance" width="550" height="500"/>
        <div className="contactinfo">
        <h3 className="infoitem">(603) 459-5055</h3>
        <h3 className="infoitem">mhtreadwell718@gmail.com</h3>
        <a href="https://github.com/mollytreadwell"><h3 className="infoitem">github</h3></a>
        <a href="https://vercel.com/dashboard"><h3 className="infoitem">vercel</h3></a>
        <a href="https://www.instagram.com/molllyhoppy/"> <h3 className="infoitem">instagram</h3></a>
        <a href="https://www.linkedin.com/in/molly-treadwell-a30693240/"><h3 className="infoitem">linkedin</h3></a>
        </div>
        </div>
    )
}