import { Button, Carousel } from 'react-bootstrap';
import storeItems from '../data/items.json'
import '../index.css';
import { Link } from 'react-router-dom';

export function Home(){
    return (
        <>
            <section className='home-bg d-flex justify-content-center align-items-center'>
                <div className='text-uppercase main-font'>
                    <h2 className='home-font m-0'>new gameboy collection</h2>
                    <Link to={'/store'}><Button className='shop-btn'>Shop Now</Button></Link>
                </div>
                <div>
                    <img className='gameboy-size' src="/images/gameboy-sp.png" />
                </div>
            </section>
            <section className="carousel-bg">
                <div>
                    <h3 className='carousel-font text-uppercase'>Featured Products</h3>
                </div>
                <Carousel fade className='carousel-width'>
                    {storeItems.map(item => (
                    <Carousel.Item key={item.id} interval={2000}>
                        <img
                        className="d-block image-size"
                        src={item.imgUrl}
                        alt={item.name}
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </section>
            <footer className='p-3 text-center d-block align-items-center justify-content-center'>
                <div>
                    <p className='mb-0'>© 2023 BUY2K</p>
                </div>
            </footer>
        </>
    )
}