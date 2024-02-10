import React from 'react';
import carLogo from '..//images/logo.png'


const MapPart = () => {
    return (
        <div className="map-partcenter">
            <div className="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.840083455219!2d-109.95201574206627!3d27.482536864447077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c815f8a65cab41%3A0x2b033666b0f31892!2sPremium%20Motors!5e0!3m2!1sen!2smx!4v1698907758555!5m2!1sen!2smx"
                    width="100%" height="550" style={{border: "0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="map-schedule">
                <div className="contact-info">
                    <img src={carLogo} alt="logo" className="schedule-logo" />
                    <div className="map-schedule">
                        <div className="contact-info">
                            <p><a href="mailto:info@obzu.autos">info@obzu.autos</a></p>
                            <p><a href="tel:+17143054088">(714) 305-4088</a></p>
                            <p><a href="https://maps.app.goo.gl/eJepiBocrKGfGsfs7" target="_blank">Blvd. Rodolfo Elías Calles
                                1009, Sochiloa, 85150 Cdad. Obregón, Son.</a></p>
                            <h1>Hours</h1>
                            <hr/>
                            <table summary="Horarios de atención">

                                <tbody>
                                <tr>
                                    <th scope="row">Lunes</th>
                                    <td>10:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Martes</th>
                                    <td>10:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Miércoles</th>
                                    <td>10:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Jueves</th>
                                    <td>10:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Viernes</th>
                                    <td>10:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sábado</th>
                                    <td>10:00 AM - 4:00 PM</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default MapPart;