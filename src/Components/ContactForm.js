import React from 'react';


const ContactForm = () => {
    return (
        <div className="container-form">
            <div className="">
                <div className="header-form">
                    <p className="text-header-input">Contactar </p>
                    <p className="text-header">Nos pondremos en contacto contigo</p>
                </div>
                <p className="title-form">Datos Personales </p>
                <form action="/submit" method="post">

                    <input className="inputForm" placeholder="Nombre" type="text" id="nombre" name="nombre" required/>

                    <br/>


                    <input className="inputForm" placeholder="Email" type="email" id="email" name="email" required/>

                    <br/>


                    <input className="inputForm" placeholder="Telefono" type="number" id="edad" name="edad" required/>

                    <br/>


                    <textarea placeholder="Comment..." id="mensaje" name="mensaje" rows="4" required></textarea>

                    <br/>

                    <input type="submit" value="Enviar"/>
                </form>
            </div>

        </div>
    );
};

export default ContactForm;