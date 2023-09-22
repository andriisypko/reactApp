import Button from "../button/button"
import "./card.css"

export default function Card({item, onButtonClick, type}) {
    return (
        <div className="card">
            <img className="card__img" src={item.image} alt={item.name} />
            <h3 className="card__price">{item.price}$</h3>
            <h4 className="card__name">{item.name}</h4>
            <p className="card__weight">{item.weight || ""}</p>
            <div className="card__btn-container">
            <Button buttonText="Add" initialColor="#F2F2F3" hoverColor="#FFAB08" textInitialColor="black" onClick={() => onButtonClick(item, type)} />
            </div>
        </div>
    )
}