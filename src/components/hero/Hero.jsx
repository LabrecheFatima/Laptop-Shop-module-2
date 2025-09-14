import './Hero.css'

function Hero(props) {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <h1>{props.title}</h1>
                <p className='hero-subtitle'>{props.subtitle}</p>
                <div className='hero-content'>
                    <button className= 'btn-primary'>Shop now</button>
                    <a href= '#learn-more' className='link-learn-more'>Learn more →</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;