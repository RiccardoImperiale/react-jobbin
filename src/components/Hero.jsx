import '../assets/css/hero.css'
import heroImage from '../assets/img/hero-image.png'
export default function Hero() {
    return (
        <section className="hero container">
            <h1>Get your dream job <br /> with Jobbin.</h1>
            <div className="subtitle">Lorem ipsum met consectetur adipisicing elit. Cusandae ut omnis</div>
            <div className="hero_image">
                <img src={heroImage} alt="illustration of a job interview" />
            </div>
        </section>
    )
}
