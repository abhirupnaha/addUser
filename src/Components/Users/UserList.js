import style from "./UserList.module.css";
import User from "./User";
import Card from "../UI/Card";

export default function UserList(props) {
    const deleteHandler = (id) => props.onRemoveUser(id);

    if(props.users.length === 0) {
        return (
            <Card
                type={"abc"}
                id={style["userList"]}
            >
                <h2 className={style["fallback"]}> No users found </h2>
            </Card>
        );
    }
    return (
        <Card
            type={"headless"}
            id={style["userList"]}
        >
            <h2> User List </h2>
            <ul>
                {props.users.map(user => {
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            roll={user.roll}
                            marks={user.marks}
                            onDelete={deleteHandler}
                        />
                    );
                })}
            </ul>
        </Card>
    );
}