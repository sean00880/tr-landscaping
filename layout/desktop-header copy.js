import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';

const background = "img/call.png"

export default function DesktopHeader() {

    const [isActive, setActive] = useState(false);
    const activeTrueFalse = () => setActive(!isActive)
    const [isSelect, setSelect] = useState("USD");

    return (
        <>
            <div className="industify_fn_header">

                

                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/"><a>
                            <h1>TR <span>Landscaping</span> LLC</h1>
                        </a></Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                            <li className="menu-item-has-children">
                                <Link href="/"><a>Home</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/"><a>Home Alpha</a></Link></li>
                                    <li><Link href="/index-1"><a>Home Beta</a></Link></li>
                                    <li><Link href="/index-2"><a>Home Gamma</a></Link></li>
                                    <li><Link href="/index-3"><a>Home Delta</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/portfolio"><a>Projects</a></Link>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/services"><a>Our Services</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/service-single-9"><a>Aerospace and Defense</a></Link></li>
                                    <li><Link href="/service-single-8"><a>Automative Manufacturing</a></Link></li>
                                    <li><Link href="/service-single-7"><a>Chemical Industry</a></Link></li>
                                    <li><Link href="/service-single-6"><a>Oil and Gas Industry</a></Link></li>
                                    <li><Link href="/service-single-5"><a>Energy &#038; Commodities</a></Link></li>
                                    <li><Link href="/service-single-4"><a>Medical Devices</a></Link></li>
                                    <li><Link href="/service-single-3"><a>Housewares &#038; Home Decor</a></Link></li>
                                    <li><Link href="/service-single-2"><a>Textiles &#038; Apparel</a></Link></li>
                                    <li><Link href="/service-single-1"><a>Construction &#038; Engineering</a></Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="#"><a>Pages</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                    <li><Link href="/404"><a>404 Page</a></Link></li>
                                    <li><Link href="/principles"><a>Our Principles</a></Link></li>
                                    <li><Link href="/services"><a>Our Services</a></Link></li>
                                    <li><Link href="/blog-full"><a>Blog Full</a></Link></li>
                                    <li><Link href="/protected"><a>Protected Page</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/blog"><a>Blog</a></Link>
                            </li>
                            <li>
                                <Link href="/contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="toll_free_lang">
                        <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div>
                        <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div>
                        <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> 1-800-987-6543</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- /Header: Bottom Panel --> */}

            </div>
            <div className="my-class"></div>
        </>
    )
}
