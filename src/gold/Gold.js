import React from 'react';
import './gold.css';
import goldimage from './images/goldimage.png';
import unique from './images/unique.png';
import textmessages from './images/textmessages.png';
import audio from './images/audio.png';
import video from './images/video.png';
import media from './images/media.png';
import disappearing from './images/disappearing.png';
import group from './images/group.png';
import xpallogomobile from './images/xpallogomobile.svg';


function Gold(){
return (
    <>
    <section className="web-section pt-1">
            <div className="mainHeadingSec text-center div1-pt-1">
                <p className='text-uppercase pricingDetails'>PRICING DETAILS</p>
                <h2 className='text-uppercase choosePlan'>CHOOSE A PLAN <br></br>THAT'S RIGHT FOR YOU</h2>
                <p className='goldPara'>Stage Gold</p>
            </div>


            <div className="rowflex div2-pt-1">
                <div className="goldImage">
                    <img src={goldimage} ></img>
                </div>
                <div className="goldDescDiv">
                    <div className="top-goldDesc">
                        <p className="p1">Unlock Premium Features</p>
                        <p className='p2'>Get unlimited access to the ultimate in secure communication</p>
                    </div>
                    <div className='bottom-goldDesc'>
                        <ul>
                            <li className='goldLi'>
                                <img src={unique}></img><p>Unique Global xID™</p>
                            </li>
                            <li className='goldLi'>
                                <img src={textmessages}></img><p>Unlimited Secure Text Messages</p>
                            </li>
                            <li className='goldLi'>
                                <img src={audio}></img><p>Unlimited Secure Audio Calling</p>
                            </li>
                            <li className='goldLi'>
                                <img src={video}></img><p>Unlimited Secure Video Calling</p>
                            </li>
                            <li className='goldLi'>
                                <img src={media}></img><p>Unlimited Media Sharing</p>
                            </li>
                            <li className='goldLi'>
                                <img src={disappearing}></img><p>Disappearing Message Feature</p>
                            </li>
                            <li className='goldLi'>
                                <img src={group}></img><p>Group Messaging</p>
                            </li>
                        </ul>
                        <p className='muchMore'>and more...</p>
                    </div>

                    <div className="lowerButtonsDiv">
                        <div className="monthlyDiv text-center">
                            <p className='payTime'>Monthly</p>
                            <div className="btnMonth">
                                <p className="paymentGold">$4.99</p>
                                <p className='priceGold'>USD / month</p>
                            </div>
                        </div>
                        <div className="yearlyDiv text-center">
                        <p className='payTime'>Yearly</p>
                        <div className="btnYear">
                                <p className="paymentGold">$39.99</p>
                                <p className='priceGold'>USD / year</p>
                        </div>
                        <p className='discount'>SAVE 35%</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    <section className="mobile-section">
        <a className="logoItem">
            <img className="mobileLogo" src={xpallogomobile}>
            </img>
            <h2 className="mobileLogoHeading">
                XPAL PREMIUM
            </h2>
        </a>

        <div className="premiumPlan">
            <h2>Unlock Premium Features</h2>
            <p>Cost Effective, Full Service, High Security</p>
            <ul className="listGroup">
                <li className='listGroupItem'>
                    <img src={unique}></img><p>Unique Global xID™</p>
                </li>
                <li className='listGroupItem'>
                    <img src={textmessages}></img><p>Unlimited Secure Text Messages</p>
                </li>
                <li className='listGroupItem'>
                    <img src={audio}></img><p>Unlimited Secure Audio Calling</p>
                </li>
                <li className='listGroupItem'>
                    <img src={video}></img><p>Unlimited Secure Video Calling</p>
                </li>
                <li className='listGroupItem'>
                    <img src={media}></img><p>Unlimited Media Sharing</p>
                </li>
                <li className='listGroupItem'>
                    <img src={disappearing}></img><p>Disappearing Message Feature</p>
                </li>
                <li className='listGroupItem'>
                    <img src={group}></img><p>Group Messaging</p>
                </li>
            </ul>
        </div>

        <div className='first-btn pricingPlanBtn'>
            <div className='pricingBtnText'>
                <p>Annual billing</p>
                <p>$39.99</p>
            </div>
            <button className="btnInfo btn-lg btn-1">
                Upgrade to Yearly
            </button>
            <p className='btnText text-center'>
                By choosing this option you can save 40%
            </p>
        </div>

        <div className='second-btn pricingPlanBtn'>
            <div className='pricingBtnText'>
                <p>Monthly billing</p>
                <p>$4.99</p>
            </div>
            <button className="btnInfo btn-lg btn-2">
                Upgrade to Monthly
            </button>
        </div>
        </section>    
    </>
)
}
export default Gold;