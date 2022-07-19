import {useState} from "react";

import style from "./User.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

export default function User(props) {
    const [toggle, setToggle] = useState(false);
    
    let warning = '';

    const warningHandler = () => {
        setToggle(true);
        console.log("toggle on ", props.id)
    }

    const deleteHandler = (event) => {
        event.preventDefault();
        setToggle(false);
        props.onDelete(props.id)
    }

    const cancelDeleteHandler = (event) => {
        event.preventDefault();
        setToggle(false);
    }

    if(toggle) {
        // const m = `Are you sure want to delete user? 
        //         \nname: ${props.name}
        //         \nroll no: ${props.roll}
        //         \nmarks: ${props.marks}`;
        const m = [
            "Are you sure you want to delete the following user?",
            <br />,
            `name: ${props.name}`,
            <br/>,
            `roll no: ${props.roll}`,
            <br/>,
            `marks: ${props.marks}`
        ]

        warning = (
            <Modal message={m} onCancel={cancelDeleteHandler} id={style["modal"]}>
                <div className={style["modal__action"]}>
                    <button
                        className={`${style["bttn"]} ${style["bttn--accept"]}`}
                        onClick={deleteHandler}
                    >
                        Ok
                    </button>

                    <button
                        className={`${style["bttn"]} ${style["bttn--cancel"]}`}
                        onClick={cancelDeleteHandler}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        )
    }

    return (
        <>
            {
                toggle &&
                warning
            }
            <Card
                type={{ type: "head", title: props.name }}
                id={style.user}
            >
                <div className={style.user__body}>
                    <Card
                        type={{ type: "head", title: "Roll" }}
                        id={style["user__roll"]}
                    >
                        <h2> {props.roll} </h2>
                    </Card>

                    <Card
                        type={{ type: "head", title: "Marks" }}
                        id={style["user__marks"]}
                    >
                        <h2> {props.marks} </h2>
                    </Card>
                </div>
                <button
                    className={style["delete--bttn"]}
                    onClick={warningHandler}
                >
                </button>
            </Card>
        </>
    );
}