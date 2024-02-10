import React, {Component} from 'react'
import defaultBcg from '../images/car-2.jpg';
// import Hero from './HeroBackground'
import Banner from './Banner'
import {Link} from 'react-router-dom';
import {CarContext} from '../context';
import StyledHeroBackground from './StyledHeroBackground';
import MyGalery from './Galery'
import ContactForm from "./ContactForm";


export default class SingleCar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = CarContext;

    render() {
        const {getCar} = this.context;
        const car = getCar(this.state.slug);

        if (!car) {
            return (

                <div className="error">
                    <h3>Car not available...</h3>
                    <Link to='/cars' className="btn-primary">
                        Back to cars
                    </Link>

                </div>
            )
        }
        const {name, year, description, carMake, size, price, extras, gps, sportPackage, images} = car;
        const [mainImg, ...defaultImg] = images;


        // Estructura del arreglo de imágenes
        const myGalleryImages = defaultImg.map(item => ({
            original: item,
            thumbnail: item,

        }));
        // console.log(car)
        return (
            <>
                <StyledHeroBackground img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/cars' className="btn-primary">
                            Back to cars
                        </Link>
                    </Banner>
                </StyledHeroBackground>

                <section className="single-room">

                    <div className="single-room-info">
                        <article className="desc">
                            <div className="gallery">
                                <MyGalery images={myGalleryImages}></MyGalery>
                            </div>

                        </article>
                        <article className="info">
                            <h3>{`${year} ${name}`}</h3>
                            <h6>Year: {year}</h6>
                            <h6>price: ${price}</h6>
                            <h6>Fuel Tank: {size} L</h6>
                            <h6>
                                Manufacturer: {carMake}
                            </h6>
                            <h6>
                                Sport Package: {sportPackage ? "high performance sport motor" : "unavailable"}
                            </h6>
                            <h6>GPS: {gps ? "included" : "unavailable"}</h6>
                            <div className="button-container">
                                <button className="button-28" role="button">Cotizar</button>
                                <button className="button-28" role="button">Llamar</button>
                            </div>
                        </article>
                        <div className="details">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </div>

                    </div>
                </section>

                <section className="car-extras">
                    <h6>premium features</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>

                <ContactForm>

                </ContactForm>


            </>
        )
    }
}


