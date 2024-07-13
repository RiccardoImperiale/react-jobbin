import '../assets/css/card.css'

export default function Card({ title, subtitle, btnIcon, btnText, icon }) {
    return (
        <div className="card">
            <div className="top">
                {icon}
                <h3>{title}</h3>
                <div>{subtitle}</div>
            </div>
            <div className="bottom">
                <a className='btn_dark' href="#">{btnText} {btnIcon}</a>
            </div>
        </div>
    )
}
