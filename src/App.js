import {useState} from "react";

import './App.css';
import UserList from "./Components/Users/UserList";
import AddUser from "./Components/AddUser/AddUser";

const DUMMY_VALUE = [
	{
		id: 0,
		name: "Abhirup",
		roll: 31,
		marks: 89
	},
	{
		id: 1,
		name: "Sujan",
		roll: 30,
		marks: 88
	},
	{
		id: 2,
		name: "Tamonut",
		roll: 10,
		marks: 88
	}
];

function Counter() {
	let count = 3;
	this.increment = function() {
		count ++;
	}
	this.getCount = function() {
		return count;
	}
}
const id = new Counter();

function App() {
	const [data, setData] = useState(DUMMY_VALUE);

	function addUserHandler(user) {
		user = {
			id: id.getCount(),
			...user
		};
		id.increment();

		setData((prev) => [
			...prev,
			user
		])
	}

	function removeUserHandler(id) {
		setData((prevState) => {
			return (
				prevState.filter( (prev) => prev.id !== parseInt(id) )
			);
		})
	}

	return (
		<div>
			<AddUser onSaveUser={addUserHandler} />
			<UserList users={data} onRemoveUser={removeUserHandler} />
		</div>
	);
}

export default App;