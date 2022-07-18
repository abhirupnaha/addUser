import style from "./Card.module.css";

/*
    props required ->
    type
        .type = head
        .title = header of card head typed card
    id = classname of card
*/

export default function Card(props) {
    if(props.type.type === "head") {
        return (
            <div className={style["card--head"] + ` ${props.id}`}>
                <div className={style["card__title"]}>
                    <h2> {props.type.title} </h2>
                </div>
                <div className={style["card__body"]}>
                    {props.children}
                </div>
            </div> 
        );
    }

    return (
        <div className={style["card"] + ` ${props.id}`}>
            {props.children}
        </div>
    );
}