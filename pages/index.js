import React from 'react'
import Services from '../components/Home/HomeServices'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import { Design, Drawing, TowerCrane } from '../public/svg/service/IconService';
import Image from 'next/image'

const Learning = "/img/about/right.jpg"
const right = "/img/about/right.jpg"
const rightImage = "/img/service/right-image.jpg"
const testimonial = "/img/testimonial/bg.jpg"
const portfolio1 = "/img/portfolio/1.jpg"
const portfolio2 = "/img/portfolio/2.jpg"
const portfolio3 = "/img/portfolio/3.jpg"
const portfolio4 = "/img/portfolio/4.jpg"
const map = "/img/blog/map.png"
const blog1 = "/img/blog/1.jpg"
const blog2 = "/img/blog/2.jpg"
const blog3 = "/img/blog/3.jpg"


export default function Index() {
	return (
		<>
			
			<Layout className={"transdark"}>
				<Title title='Landscaping & Junk Removal in Maryland' />

				          {/* <!-- Hero Header --> */}
						  <div className="fn_cs_hero_header">
            <div className="container">
              <div className="content_holder max450">
                <div className="title_holder">
                  <h3>Professional Lawncare & Junk Removal in <span>Maryland</span></h3>
				  <p className="para1">
				We provide a range of junk removal services in addition to lawn care and landscape maintenance, all of which are handled by our highly qualified professional team. Our aim is to offer each client the greatest possible customer service together with stunning results.
				  <br /><br />
For a free, no-obligation quote on all of your lawn care and landscape management requirements, get in touch with us today.
</p>
<p className="para2">
				We provide a range of junk removal services in addition to lawn care and landscape maintenance, all of which are handled by our highly qualified professional team. Our aim is to offer each client the greatest possible customer service together with stunning results.
</p>
                </div>
                <div className="btn_holder fn_cs_lightgallery">
                  <Link href="/services"><a className="discover">Discover our Website</a></Link>
                  <span className="video lightbox" data-src="https://youtu.be/3j3SQEUfREs">
                    <span className="icon"></span>
                    <span className="text">Watch Video</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg_holder">
              <div className="o_img" style={{ "backgroundImage": "url(/img/hero.jpg)" }}></div>
              <div className="o_color"></div>
            </div>
          </div>
          {/* <!-- /Hero Header --> */}

          {/* <!-- Info List --> */}
          <div className="fn_cs_info_list full" data-cols="3">
            <div className="container">
              <div className="list">
                <ul>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>We Have ISO Certificate</h3>
                      <p>An ISO 1900:2007</p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>We Provide High Services</h3>
                      <p>That you have expected</p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>Most Expirienced Company</h3>
                      <p>In the constrution business</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /Info List --> */}

				
				{/* <!-- About Section --> */}
				<div className="about_section">

					{/* <!-- About Shortcode --> */}
					<div className="fn_cs_about">
						<div className="container">
							<div className="a_inner">
							<div className="leftpart">
									{/* <div className="r_inner" id="scene">
										<div className="layer border" data-depth="0.3">
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5">
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9">
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div> */}
									<div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
										<div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/about/right.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "none", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" data-bg-img="img/about/right.jpg" style={{ "backgroundImage": "url(img/about/right.jpg)" }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "none", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<img src="img/about/right.jpg" alt="" />
										</div>
									</div>
								</div>
								<div className="rightpart">
									<div className="title_holder">
										<h3 className="title">We are TR Landscaping</h3>
										<p>Across the state of Maryland, TR Landscape provides top-notch landscaping services for residential, commercial, and industrial landscapes. Since our establishment in 2005, we have established a reputation as one of the state's reliable landscaping companies. Regardless of the scope of the job, our family-run landscaping company is committed to providing all of its customers with excellent landscaping at a reasonable price.</p>
										<h2 className="subtitle">Our Mission</h2> <hr />
										<p>We recognize the value of outdoor ambiances since it is in our nature to be subtly influenced by our surroundings. Whether it's where you kick back or carry out your life's work, we are dedicated to offering every client exemplary quality services and first-rate customer care. It is no secret that we go above and beyond to maintain our standards, and we are eager to collaborate with you!</p>
									</div>
									<div className="sign_holder">
										<h3 className="name">Travis Ryan</h3>
										<p className="occ">Chief Executive</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					{/* <!-- /About Shortcode --> */}

				</div>
				{/* <!-- /About Section --> */}

				<div className="services_section">
					
				 {/* <!-- Main Title --> */}
				 <div className="fn_cs_main_title">
              <div className="container">
                <div className="title_holder">
                  <h3>TR Landscaping Services</h3>
                </div>
              </div>
            </div>
            {/* <!-- /Main Title --> */}

				
				  {/* <!-- Service Classic Shortcode --> */}
				  <div className="fn_cs_services_classic">
                        <div className="container">
                            <div className="list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-1"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
                                                <Image src="/img/about/lawn.png" className="fn__svg" height={100} width={100} />
                                            </span>
                                            <h3>Lawncare</h3>
                                            <p>TR Landscaping provides complete lawn care management, including a variety of regular lawn mowing programs, to keep your grass looking lovely!</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-2"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
											<Image src="/img/about/junk-removal.svg" className="fn__svg" height={100} width={100} />
                                            </span>
                                            <h3>Junk <br />Removal</h3>
                                            <p>The client retains an architect or engineer to design the project and to prepare the necessary drawings and specifications for new project.</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                    
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Service Classic Shortcode --> */}
					<Services />
</div>


				



				{/* <!-- Service Section --> */}
				<div className="service_section">

					{/* <!-- About with Rating Shortcode --> */}
					<div className="fn_cs_about_with_rating">
						<div className="container">
							<div className="awr_inner">
							<div className="left_part">
									<div className="r_inner">
										<div className="top_section">
											<div className="badge_holder">
												<div className="badge_left">
													<div className="b_title">
														<h3>World&apos;s Leading Industry<br />Corporation</h3>
													</div>
													<div className="b_desc"><span className="year">47</span><span className="text">Years of Experience</span></div>
												</div>
												<div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
											</div>
											<div className="rating_holder">
												<div className="r_header"></div>
												<div className="r_footer"></div>
												<Link href="#"><a></a></Link>
												<Stars className="fn__svg" />
												<h3 className="rating_number">9.7</h3>
												<h3 className="rating_text">Customer Rating</h3>
											</div>
										</div>
										<div className="bottom_section">
											<div className="list">
												<ul>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Best talent in the industry business.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>One of the most expirienced company.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>We have completed over 3000 projects.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Most dedicated and passionate team.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Company has over 2000 workers.</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="right_part">
									<div className="title_holder">
										<h3>Why choose our services?</h3>
										<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
										<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
									</div>
									<div className="signature">
										<Certificate className="fn__svg" />
										<p>We have a<br />ISO Certificate.</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					{/* <!-- /About with Rating Shortcode --> */}

				</div>
				{/* <!-- /Service Section --> */}


				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>We will Make Your Dream Come True</h3>
								<p>We are focused on sustainable business that delivers the best possible project results.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Our Responsibility</a></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Call to Action --> */}

				{/* <!-- Testimonial Section --> */}
				<div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

					<div className="overlay"></div>

					{/* <!-- Single Testimonial Shortcode --> */}
					<div className="fn_cs_single_testimonial">
						<div className="container">
							<div className="inner">
								<Quotes className="fn__svg"/>
								<div className="content_holder">
									<p>Hiday Motors needed to build a brand new 28,000 sf facility that would both meet our needs and comply with GMs standards - which seemed daunting, to say the least. Industify alleviated all of our concerns and communicated with us every step of the way. We have received dozens of compliments from our customers, and our employees love the new store!</p>
									<h3>Steve Lehman</h3>
									<h5>CEO of Hiday Motors.</h5>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Single Testimonial Shortcode --> */}

				</div>
				{/* <!-- /Testimonial Section --> */}


				{/* <!-- Project Sticky Full --> */}
				<div className="fn_cs_project_sticky_full">
					<div className="inner">
						<div className="left_part">
							<div className="fn_cs_sticky_section">
								<h3>Our latest projects.</h3>
								<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
								<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
								<Link href="/portfolio"><a>View All Projects</a></Link>
							</div>
						</div>

						<div className="right_part">
							<div className="fn_cs_sticky_section">
								<ul>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio1})` }}></div>
												<Link href="/portfolio-single-1"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-1"><a>Commercial Lawncare - 02/11/2023</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-1"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio3})` }}></div>
												<Link href="/portfolio-single-3"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-3"><a>Storage Cleanout - 01/17/2023</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-3"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio4})` }}></div>
												<Link href="/portfolio-single-4"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-4"><a>Residential Mulching - 12/11/2022</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-4"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
				{/* <!-- /Project Sticky Full --> */}


				{/* <!-- Blog Section --> */}
				<div className="blog_section">

					<div className="overlay" style={{ "backgroundImage": `url(${map})` }}></div>

					{/* <!-- Main Title --> */}
					<div className="fn_cs_main_title">
						<div className="container">
							<div className="title_holder">
								<h3>Thoughts &amp; Experiments</h3>
							</div>
						</div>
					</div>
					{/* <!-- /Main Title --> */}

					{/* <!-- Triple Blog Modern Shortcode --> */}
					<div className="fn_cs_triple_blog_modern fn_alpha">
						<div className="container">
							<div className="inner">

								<ul>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog1})` }}>
												<div className="time">
													<span></span>
													<h3>28</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-1"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-1"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog2})` }}>
												<div className="time">
													<span></span>
													<h3>27</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-2"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-2"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog3})` }}>
												<div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-3"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-3"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-3"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
								</ul>

							</div>
						</div>
					</div>
					{/* <!-- /Triple Blog Modern Shortcode --> */}

				</div>
				{/* <!-- /Blog Section --> */}

			</Layout>

		</>
	)
}
