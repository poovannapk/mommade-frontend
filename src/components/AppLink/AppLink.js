import React from 'react';
import Phone from '../images/foodapp.png'
import './AppLink.css'


const AppLink = () => {
    return (
        <div>
            <div className="appContent">
            <div>
            <div className="imgTextContent"><div >
            <div height="45rem" width="25rem" >
            <div src="" ></div>
            <img alt="get-mom-app" src={Phone} loading="lazy" className="phoneImage" />
            </div>
            </div>
            <div >
            <h2 >Get the Mom App</h2>
            <p className="sc-1hez2tp-0 sc-gTPyfa cUsGNR">We will send you a link, open it on your phone to download the app</p>
            <div className="sc-cUDvuO fdNyTg">
            <section name="radio" selected="" className="sc-1kipvqd-0 fgJBOk sc-folmNH ddUBrp">
            <section className="sc-djusq7-1 hZKXXE">
            <label className="sc-1ukzvu4-0 jrHtYr">
            <input type="radio" name="radio" value="email" label="Email" checked="" className="sc-djusq7-5 eiwrnG" />
            <span className ="sc-djusq7-0 lhmmRE">Email</span>
            </label>
            </section>
            <section className="sc-djusq7-1 hZKXXE"><label className="sc-1ukzvu4-0 jrHtYr">
            <input type="radio" name="radio" value="mobile" label="Phone" className="sc-djusq7-5 eiwrnG" />
            <span className ="sc-djusq7-0 lhmmRE">Phone
            </span>
            </label>
            </section>
            </section>
            </div>
            <div className="sc-eoricN Fgsuk">
            <section label="Email" value="" color="white" type="text" className="sc-1yzxt5f-6 gXbCjv">
            <section width="100%" className="sc-1yzxt5f-4 ioJwpZ">
            <input type="text" width="100%" value="" autocomplete="on" className="emailPhone" />
            </section>
            {/* <label value="" class="sc-1yzxt5f-7 kdnpos">Email</label> */}
            <div className="sc-1yzxt5f-5 QjbsL">

            </div>
            </section>
            <button className="shareAppButton" role="button" tabindex="0" aria-disabled="false">
            <span tabindex="-1" className="sc-1kx5g6g-2 bXdRxo">
            <span className="sc-1kx5g6g-3 dkwpEa">
            Share App Link
            </span>
            </span>
            </button>
            <button className="shareAppButton" role="button" tabindex="0" aria-disabled="false">
            <span tabindex="-1" class="sc-1kx5g6g-2 lpnzyc">
            <span className="sc-1kx5g6g-3 dkwpEa">Share</span>
            </span>
            </button>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AppLink;