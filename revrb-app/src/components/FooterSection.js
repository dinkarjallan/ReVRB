import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './FooterSection.css'

const FooterSection = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Club Newsletter to recieve music updates and event deals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" className="footer-input" name="email" placeholder="Your Email" />
                        <Button buttonStyle="btn--outline" path="/">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/register">How it Works</Link>
                        <Link to="/register">Testimonials</Link>
                        <Link to="/register">Careers</Link>
                        <Link to="/register">Investors</Link>
                        <Link to="/register">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/register">Contact</Link>
                        <Link to="/register">Support</Link>
                        <Link to="/register">Destinations</Link>
                        <Link to="/register">Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/register">Submit Videos</Link>
                        <Link to="/register">Ambassadors</Link>
                        <Link to="/register">Agency</Link>
                        <Link to="/register">Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/register">Instagram</Link>
                        <Link to="/register">Facebook</Link>
                        <Link to="/register">Youtube</Link>
                        <Link to="/register">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            ReVRB
                        </Link>
                    </div>
                    <small className="website-rights">ReVERB &copy; 2021</small>
                </div>
            </section>
        </div>
    )
}

export default FooterSection
