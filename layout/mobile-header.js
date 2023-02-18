import React, { useState, useEffect } from 'react'
import MetisMenu from 'metismenujs';
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


export default function MobileHeader() {

	const [isMobileMenu, setMobileMenu] = useState(false);
	const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		new MetisMenu("#metismenu");
	}, []);

	return (
		<>
			<div className="industify_fn_mobilemenu_wrap">
				
				{/* <!-- TOLL FREE MOBILE --> */}
				<div className="m_toll_free_lang">
					<div className="lang_switcher">
						<ul>
							<li className="active"><span>Eng</span></li>
							<li><Link href="#"><a><span>Spa</span></a></Link></li>
							<li><Link href="#"><a><span>Rus</span></a></Link></li>
						</ul>
					</div>
					<div className="m_toll_free">
						<span className="shape1"></span>
						<span className="shape2"></span>
						<span className="shape3"></span>
						<div className="tf_in">
							<div className="img_holder" style={{ "backgroundImage": "url(img/call.png)" }}></div>
							<p><span>Toll Free:</span> 1-800-987-6543</p>
						</div>
					</div>
				</div>
				{/* <!-- /TOLL FREE MOBILE --> */}
				{/* <!-- LOGO & HAMBURGER --> */}
				<div className="logo_hamb">
					<div className="in">
					<div className="menu_logo">
                        <Link href="/"><a>
                            <h1>TR <span>Landscaping</span> LLC</h1>
                        </a></Link>
                    </div>
						<div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /LOGO & HAMBURGER --> */}
				{/* <!-- MOBILE DROPDOWN MENU --> */}
				<div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
					<div>
						<nav >
							<ul className="metismenu" id="metismenu">
								<li>
									<Link href="#"><a>Home</a></Link>
									
								</li>
								<li><Link href="/portfolio"><a>Projects</a></Link></li>
								<li>
									<Link href="#"><a className="has-arrow">Our Services</a></Link>
									<ul>
										<li><Link href="/service-single-9"><a>Landscaping</a></Link></li>
										<li><Link href="/service-single-8"><a>Junk Removal</a></Link></li>
										
									</ul>
								</li>
								
								<li><Link href="/blog"><a>Blog</a></Link></li>
								<li><Link href="/contact"><a>Contact</a></Link></li>
							</ul>
						</nav>
					</div>
				</div>
				{/* <!-- /MOBILE DROPDOWN MENU --> */}
			</div>
		</>
	)
}
