import style from "./User.module.css";
import Card from "../UI/Card";

export default function User(props) {

    function deleteHandler() {
    }

    return (
        <Card
            type={{type: "head", title: props.name}}
            id={style.user}
        >
            <div className={style.user__body}>
                <Card
                    type={{type: "head", title: "Roll"}}
                    id={style["user__roll"]}
                >
                    <h2> {props.roll} </h2>
                </Card>
                
                <Card
                    type={{type: "head", title: "Marks"}}
                    id={style["user__marks"]}
                >
                    <h2> {props.marks} </h2>
                </Card>
            </div>
            <button
                className={style["delete--bttn"]}
                onClick={deleteHandler}
            >
            </button>
        </Card>
    );
}