import {useState} from "react";

import style from "./UserForm.module.css";

export default function UserForm(props) {
    const [user, setUser] = useState({
        name: "",
        roll: "",
        marks: ""
    });

    function nameHandler(event) {
        setUser(prevState => ({
            ...prevState,
            name: event.target.value
        }));
    }

    function rollHandler(event) {
        setUser(prevState => ({
            ...prevState,
            roll: parseInt(event.target.value)
        }));
    }

    function marksHandler(event) {
        setUser(prevState => ({
            ...prevState,
            marks: parseInt(event.target.value)
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        props.onSaveUser(user);
        setUser({
            name: "",
            roll: "",
            marks: ""
        })
    }

    function toggleFormHandler(event) {
        event.preventDefault();
        setUser({
            name: "",
            roll: "",
            marks: ""
        })
        props.onToggleForm();
    }

    return (
        <form
            action="#"
            className={style["form"]}
            onSubmit={submitHandler}
        >
            <div className={style["form__action"]}>
                <input
                    type="text"
                    id="form__name"
                    className={`${style["form__name"]} ${style["input"]}`}
                    placeholder="Name"
                    value={user.name}
                    onChange={nameHandler}
                    required
                />
                <label htmlFor="form__name"> Name </label>
            </div>
            <div className={style["form__action"]}>
                <input
                    type="number"
                    id="form__roll"
                    className={`${style["form__roll"]} ${style["input"]}`}
                    placeholder="Roll No"
                    value={user.roll}
                    onChange={rollHandler}
                    required
                />
                <label htmlFor="form__roll"> Roll No </label>
            </div>
            <div className={style["form__action"]}>
                <input
                    type="number"
                    id="number"
                    className={`${style["form__marks"]} ${style["input"]}`}
                    placeholder="Marks"
                    value={user.marks}
                    onChange={marksHandler}
                    required
                />
                <label htmlFor="form__marks"> Marks </label>
            </div>

            <span className={`${style["form__action"]} ${style["form__button"]}`}>
                <button
                    className={`${style["bttn--submit"]} ${style["bttn--cancel"]}`}
                    onClick={toggleFormHandler}
                >
                    cancel
                </button>

                <button
                    type="submit"
                    className={style["bttn--submit"]}
                >
                    Add User
                </button>
            </span>
        </form>
    );
}