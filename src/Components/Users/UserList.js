import {useState} from "react";

import style from "./UserList.module.css";
import User from "./User";
import Card from "../UI/Card";

export default function UserList(props) {
    const [sortValue, setSortValue] = useState("roll");

    const sortUsers = props.users.sort( (a, b) => {
        if (a[sortValue] > b[sortValue]) return -1;
        else if (a[sortValue] < b[sortValue]) return 1;
        else return 0;
    })

    const changeSortValueHandler = (event) => setSortValue(event.target.value);

    const deleteHandler = (id) => props.onRemoveUser(id);

    if(sortUsers.length === 0) {
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
            <div className={style["sort-user"]}>
                <label for={style["sort"]}> Sort by </label>
                <select name="sort-type" 
                    id={style["sort"]}
                    value={sortValue}
                    onChange={changeSortValueHandler}
                >
                    <option value="marks"> marks </option>
                    <option value="roll"> roll No</option>
                </select>
            </div>
            <ul>
                {sortUsers.map(user => {
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