import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div class="cmsWrapper ">
        <div class="fadeIn__container fadeIn__container--active">
          <div
            class="footerHead footerMain"
            data-cms-id="417678"
            data-cms-template="cWeb-ItemSingularWidget"
          >
            <div class="oyo-row--no-spacing u-alignItemsCenter">
              <div class="footer__leftHeader">
                <span class="footer__logo">
                  MOM MADE
                </span>
                <span class="footerLeftHeaderNew">
                  The World's Fastest Growing Mom Made Chain
                </span>
              </div>
            </div>
            <div class="footer__rightHeader">
              <span>Join our network and grow your business!</span>
              <a
                href="/"
                className="c-nn640c"
                target="_blank"
              >
                <button type="button"  className='iconButton'>
                  <span className="iconClassRight">
                  </span>
                  <span className='iconButtonText'>Apply For Franchise</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="fadeIn__container fadeIn__container--active">
          <div
            class="footerAppIcons"
          >
            <div class="footerAppIcons__container">
              <div class="footerAppIcons__topLinks">
                <div>
                  <div>
                  </div>
                </div>
              </div>
              <div class=" footerAppIcons__topLinks">
                <div class="footerAppIcons__secondryLinksContainer">
                  <a
                    href="/"
                    target="_blank"
                    className='footerText'
                  >
                    About Us
                  </a>
                  <a href="/" target="_blank" className='footerText'>
                    Teams / Careers
                  </a>
                  <a href="/" target="_blank" className='footerText'>
                    Blogs
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className='footerText'
                  >
                    Support
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className='footerText'
                  >
                    Official MOM Made Blog
                  </a>
                </div>
              </div>
              <div class="footerAppIcons__topLinks">
                <div class="footerAppIcons__secondryLinksContainer">
                  {/* <a
                    href="/"
                    target="_blank"
                  >
                    Terms and conditions
                  </a>
                  <a
                    href="/"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/"
                    target="_blank"
                  >
                    Responsible Disclosure
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fadeIn__container fadeIn__container--active">
          <div
            class="footerProperties"
          >
            <div class="footerProperties__container">
              <div class="footerProperties__propertiesWrapper">
                <div class="footerProperties__property">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fadeIn__container">
          <div
            class="footerDestinations"
          >
            <div class="oyo-row footerDestinations__container">
              <div class="footerDestinations__cityGrid">
                {/* <a
                  href="/"
                  class="footerDestinations__link"
                >
                  <span>Mom Made near me</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div class="fadeIn__container fadeIn__container--active">
          <div
            class="footerSocial"
          >
            <div class="footerSocial__container">
              <div >
                <div class=" footerSocial__social">
                </div>
                <div class="footerSocial__tagLine"></div>
                <div class=" footerSocial__copyright">
                  2021 © MM Techology Soltions Private Limited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
