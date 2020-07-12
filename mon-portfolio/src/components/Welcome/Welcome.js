import React from 'react'
import {Container, Row, Col, Button, Image, Jumbotron} from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundSlider from 'react-background-slider';
import BackgroundSlideshow from 'react-background-slideshow';

import Photo1 from './photoCarousel/7.jpg';
import Photo2 from './photoCarousel/5.jpg';
import Photo3 from './photoCarousel/6.jpg';

import './welcome.css';
import './css/normalize.css';
import './css/skeleton.css';


class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome" className="carousel">
                <div className="carouselBeforeContainer">
                {/* <Row>
                    <Col> */}
                        {/* <Jumbotron className="jumbotron"> */}
                            <Container className="carouselContainer">
                                <Carousel autoPlay interval="3000" transitionTime="3000" className="mainCarousel">

                                    {/* <div className="carousel-photo photo1">
                                        <Image src={Photo1} fluid className="carousel_photo" />
                                        <div className="text">
                                            <h1 className="carousel-legend ">BIENVENUE DANS MON UNIVERS</h1>
                                        </div>
                                    </div> */}

                                    {/* <div className="carousel-photo photo2" >
                                        <Image src={Photo2} fluid  className="carousel_photo"/>

                                        <h1 className="carousel-legend">DECOUVREZ MON TRAVAIL.</h1>

                                    </div> */}
                                    {/* <div className="carousel-photo photo3">
                                        <Image src={Photo3} fluid className="carousel_photo"/>

                                        <p className="legend">Legend 3</p>
                                    </div> */}


                                    {/* <div className="carouselDiv"> */}
                                        <div className="carouselText"><h1>BIENVENUE DANS MON UNIVERS</h1></div>
                                    {/* </div>     */}

                                    {/* <div className="carouselDiv"> */}
                                        <div className="carouselText"><h1>DECOUVREZ MON TRAVAIL.</h1></div>
                                    {/* </div>  */}

                                    {/* <div className="carouselDiv"> */}
                                        <div className="carouselText"><h1>TRAVAILLONS ENSEMBLE.</h1></div>
                                    {/* </div>  */}

                                </Carousel>
                            </Container>
                        {/* </Jumbotron> */}
                        {/* <BackgroundSlideshow images={[Photo1, Photo2, Photo3]}  /> */}

                    {/* </Col>
                </Row> */}
                </div>
            </div>


            // <div id="welcome" className="carousel">
            //     <BackgroundSlideshow images={[Photo1, Photo2, Photo3]} />

            // </div>
        )
    }
}

export default Welcome;