export const Card = ({ icon, title, text, link = '#' }) => {
    return (
        <div className="container-card">
            <img src={`../../public/${icon}`}></img>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={`${link}`} alt="">READ MORE</a>
        </div>

    );

}