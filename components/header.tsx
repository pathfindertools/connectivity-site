import React, { useState, useRef, useEffect } from "react";
import * as ga from '../lib/ga'
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const pageJumps = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && (link.includes("http://") || link.includes("https://"))
  return isExternalLink ? '_blank' : ''
}

const Dropdown = ({item}) => {
  const ref = useRef(null);
  const [ isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ isOpen ]);

  return (
    <div className="relative inline-block" ref={ref}>
      <a className="block no-underline cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
        {item.label}
        <svg className="relative inline-block w-4 h-4 ml-2 -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="#ffffff" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
        </svg>
      </a>
      {isOpen && (
        <div className="pt-2">
          <ul className="absolute right-0 bg-primary">
            {item.subNavItems.map(function (subItem, index) {
              return (
                <li className="block" key={index}>
                  <a className={"block no-underline whitespace-nowrap px-4 py-1"} href={subItem.link} target={linkTarget(subItem.link)} onClick={() => setIsOpen(!isOpen)}>{subItem.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

const MobileSub = ({item, className}) => {
  const ref = useRef(null);
  const [ isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <div className={`w-full bg-white h-px opacity-25`} />
      <a className="block leading-8 py-4 no-underline cursor-pointer select-none" onClick={() => setIsOpen(true)}>
        {item.label}
        <svg className="relative inline-block w-3 h-3 ml-1.5 -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="#ffffff" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
        </svg>
      </a>
      {/* {isOpen && ( */}
        <div className={`${className} fixed inset-0 transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'}`} >
          <a className="block p-4 leading-8 mb-1" onClick={() => setIsOpen(false)}>
            <svg className="inline-block w-3 h-3 mr-1 relative -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/>
            </svg>
            Back
          </a>
          <ul className="px-5">
            {item.subNavItems.map(function (subItem, index) {
              return (
                <li key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a className={"block no-underline whitespace-nowrap leading-8 py-4"} href={subItem.link} target={linkTarget(subItem.link)}>{subItem.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      {/* )} */}
    </li>
  );
}

const LanguageToggle = ({language}) => {
  const linkClasses = "block w-8 h-8 rounded-full border-2 text-white font-bold text-md text-center mt-4 pt-0.5"
  const activeLinkClasses = "block w-8 h-8 rounded-full bg-white text-primary font-bold text-md text-center mt-4 pt-1"
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div>
      <a href="#" onClick={() => setLanguageOpen(!languageOpen)}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.4296 22.4057C30.4441 20.4345 30.998 18.2243 30.998 16.0023C30.998 15.9557 30.998 15.9032 30.9864 15.8565C30.9631 13.6871 30.4267 11.5294 29.4355 9.59903C29.4063 9.50572 29.3538 9.41824 29.2955 9.34243C27.5405 6.10578 24.6544 3.72058 21.1269 2.63003C20.8878 2.55422 20.6488 2.49007 20.4097 2.43175C20.3689 2.42008 20.3281 2.40842 20.2873 2.40259C16.9697 1.59197 13.5063 2.01186 10.4627 3.62143C3.63512 7.22549 1.01136 15.7049 4.61466 22.534C6.53875 26.1788 9.85635 28.6224 13.5704 29.5613C13.6171 29.5788 13.6579 29.5846 13.7045 29.5963C15.8444 30.1153 18.1125 30.1328 20.3164 29.5963C20.3514 29.5904 20.3806 29.5846 20.4155 29.5729C21.3718 29.3338 22.3163 28.9898 23.2317 28.529L29.9252 29.9812C29.9894 29.9928 30.0477 29.9987 30.1118 29.9987C30.38 29.9987 30.6366 29.8762 30.7998 29.6604C31.0039 29.3921 31.0447 29.0364 30.8931 28.7332L28.5142 23.9452C28.7999 23.5312 29.0565 23.0938 29.2955 22.6506C29.3538 22.5748 29.3946 22.4931 29.4296 22.4057ZM5.94986 10.7537H10.3869C10.177 12.1417 10.0546 13.6113 10.0196 15.1276H4.79541C4.90619 13.6113 5.30267 12.1242 5.94986 10.7537ZM28.0478 10.7537C28.695 12.1242 29.0914 13.6113 29.2022 15.1276H23.9897C23.9547 13.6113 23.8264 12.1417 23.6224 10.7537H28.0536H28.0478ZM22.2405 15.1276H11.7688C11.8038 13.6113 11.9437 12.1359 12.1594 10.7537H21.844C22.0656 12.1359 22.1997 13.6113 22.2347 15.1276H22.2405ZM5.94403 21.251C5.27352 19.8397 4.8887 18.3584 4.78375 16.8771H10.0196C10.0546 18.3934 10.1829 19.863 10.3928 21.251H5.94403ZM11.763 16.8771H22.2347C22.1939 18.3934 22.0598 19.8688 21.8382 21.251H12.1653C11.9437 19.8688 11.8038 18.3934 11.7688 16.8771H11.763ZM23.9839 16.8771H29.2022C29.0914 18.3934 28.695 19.8805 28.0419 21.251H23.6049C23.8148 19.863 23.943 18.3934 23.978 16.8771H23.9839ZM27.0274 9.00418H23.3017C22.9752 7.45876 22.5379 6.05329 22.0073 4.84028C24.0363 5.75004 25.7564 7.17883 27.0216 9.00418H27.0274ZM19.6226 4.04132C20.4155 5.28933 21.0569 7.00388 21.5117 9.00418H12.4918C12.9466 7.00388 13.5938 5.28933 14.3867 4.03549C15.238 3.84887 16.1067 3.74973 16.9755 3.74973C17.8443 3.74973 18.748 3.84887 19.6226 4.04132ZM11.279 5.16686C11.5181 5.03856 11.763 4.92193 12.0078 4.81695C11.4714 6.0358 11.0341 7.44709 10.7018 9.00418H6.95855C8.03721 7.44709 9.48903 6.11744 11.279 5.17269V5.16686ZM6.95855 22.9947H10.7076C11.0341 24.5401 11.4714 25.9456 12.0078 27.1644C10.0196 26.278 8.25877 24.8667 6.95855 22.9947ZM14.3867 27.9517C13.5996 26.692 12.9582 24.9775 12.5034 22.9947H21.5117C21.0627 24.9775 20.4214 26.6862 19.6342 27.9459C17.8792 28.3308 16.0951 28.3249 14.3867 27.9517ZM28.5201 27.8817L23.3017 26.7503C23.1034 26.7095 22.8935 26.7328 22.707 26.832C22.4796 26.9545 22.2405 27.0536 22.0073 27.1586C22.5379 25.9456 22.9752 24.5401 23.3017 23.0005H27.0333C26.9575 23.1113 26.8817 23.2279 26.8 23.3387C26.6018 23.6012 26.5668 23.9569 26.7126 24.2543L28.5142 27.8875L28.5201 27.8817Z" fill="white"/>
        </svg>
      </a>
      <div className={languageOpen ? '' : 'hidden'}>
        <a className={language === 'en' ? activeLinkClasses : linkClasses } href="/">
          En
        </a>
        <a className={language === 'es' ? activeLinkClasses : linkClasses } href="/es">
          Es
        </a>
      </div>
    </div>
  )
}

export const Header = ({
  // language,
  blocks,
  globalData
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const pageJump = (label) => {
    setNavOpen(!navOpen)
    ga.event({
      action: "page_jump",
      params : {
        jump_label: label
      }
    })
  }

  const nav = globalData.nav
  const navItems = nav?.navItems || []
  const sectionClasses = navOpen ? "md:h-screen" : "md:h-10";
  const navClasses = navOpen ? "md:opacity-100 m-0" : "md:opacity-0 md:pointer-events-none";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    lineHeight: "4rem",
    transition: "line-height .4s"
  } : {
    lineHeight: "6rem",
    transition: "line-height .4s"
  }
  const logoStyles = { 
    marginRight: `${globalData.logo.imageMargin}px`
  }

  function Logo(props) {
    const hasLogoImage = globalData.logo?.image;
    if (hasLogoImage) {
      return (
        <img className={props.className} src={globalData.logo?.image} width={globalData.logo?.imageWidth} height={globalData.logo?.imageHeight} style={logoStyles} alt={globalData.logo?.logoType || "logo"} />
      );
    }
    return (
      <h1 className={`flex-none ${props.className} ${globalData.logo?.logoTypeStyle}`} style={logoStyles}>{globalData.logo?.logoType}</h1>
    );
  }

  
  return (
    <section className="relative">
      <>
        {/* Desktop Nav */}
        <div className="md:hidden absolute z-10 top-0 left-0 right-0">
          <div className={`max-w-desktop-full mx-auto ${nav?.padding}`}>
            <div className="flex items-top">
              <Logo className="flex-none" />
              <ul style={navStyles} className={`${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none md:hidden`}>

                {/* {pageJumps(blocks)?.map(function (item, index) {
                  return (
                    <li className="inline-block ml-10 first:ml-0" key={index}>
                      <a className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                    </li>
                  )
                })} */}
                {navItems.map(function (item, index) {
                  const subNavItems = item.subNavItems || null
                  if (subNavItems) {
                    return (
                      <li className="relative inline-block ml-6" key={index}>
                        <Dropdown item={item} />
                      </li>
                    )
                  } else {
                    return (
                      <li className="inline-block ml-8" key={index}>
                        <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)}>{item.label}</a>
                      </li>
                    )
                  }
                })}

              </ul>
              {/* <div className="pl-4">
                <LanguageToggle language={language}/>
              </div> */}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`${sectionClasses} hidden md:block h-screen fixed z-40 top-0 left-0 right-0`}>
          <div style={backgroundStyles} className={`${backgroundClasses} ${nav.navBackgroundColor} transition duration-400 absolute inset-0 -z-1 hidden md:block`}></div>
          <div className={`w-full md:p-5`}>
            <Logo className="absolute top-4 left-4 hidden" />
            <div className="absolute top-3 -right-2">
              <div className={`py-1 pl-2 pr-6 rounded ${nav.navBackgroundColor}`} onClick={() => setNavOpen(!navOpen)}>
                <Burger color="white" isOpen={navOpen}  />
              </div>

            </div>
            <div style={{transition: "opacity .4s"}} className={navOpen ? "opacity-100" : "opacity-0"}>
              {/* <div className="relative -top-1 w-10">
                <LanguageToggle language={language} />
              </div> */}
              <ul style={navStyles} className={`${navClasses} ${nav.navTypeStyle} flex-grow hidden md:block mt-3`}>

                {/* {pageJumps(blocks)?.map(function (item, index) {
                  return (
                    <li className="block" key={index}>
                      <div className={`bg-white h-px opacity-25`} />
                      <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                    </li>
                  )
                })} */}

                {navItems.map(function (item, index) {
                  const subNavItems = item.subNavItems || null
                  if (subNavItems) {
                    return (
                      <MobileSub item={item} className={nav.navBackgroundColor} key={index} />
                    )
                  } else {
                    return (
                      <li className="block" key={index}>
                        <div className={`bg-white h-px opacity-25`} />
                        <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                      </li>
                    )
                  }
                })}

              </ul>
            </div>
          </div>  
        </div>
      </>
    </section>
  );
};
