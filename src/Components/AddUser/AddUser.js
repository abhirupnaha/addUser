import {useState} from "react";

import Card from "../UI/Card";
import style from "./AddUser.module.css";
import UserForm from "./UserForm";

export default function AddUser(props) {
    const [formToggle, setFormToggle] = useState(false);

    function saveUserHandler(user) {
        props.onSaveUser(user);
        setFormToggle(false);
    }

    function toggleHandler() {
        setFormToggle(prevState => !prevState);
    }

    let content =
        <button
            className={style["toggleForm"]}
            onClick={toggleHandler}
        >
            Add User
        </button>

    if(formToggle === true)
        content = <UserForm onSaveUser={saveUserHandler} onToggleForm={toggleHandler}/>

    return (
        <Card
            type={{ type: "headless" }}
            id={style["addUser"]}
        >
            {content}
        </Card>
    );
}