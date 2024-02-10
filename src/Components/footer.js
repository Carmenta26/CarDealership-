import React from 'react';


const Footer = () => {
    return (
        <div className="footer-body">
        <footer>
           <section className="top">
                <img src="logo.svg"/>

                <ul>
                    <li>
                        <h3>Social</h3>
                        <a href={""}> <img src={require('../images/instagram.png')} alt=""/></a>
                        <a href={""}> <img src={require('../images/facebook.png')} alt=""/></a>
                        <a href={""}> <img src={require('../images/whatsapp.png')} alt=""/></a>

                    </li>
                    <li>
                        <h3>Pricing</h3>
                        <a>Overview</a>
                        <a>Flexible Data</a>
                        <a>High Volume</a>
                        <a>Enterprise</a>
                    </li>
                    <li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.840083455219!2d-109.95201574206627!3d27.482536864447077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c815f8a65cab41%3A0x2b033666b0f31892!2sPremium%20Motors!5e0!3m2!1sen!2smx!4v1698907758555!5m2!1sen!2smx"
                            width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </li>
                </ul>




            </section>

            <section className="bottom">© 2023 Hologram</section>
        </footer>
        </div>
    );
};

export default Footer;