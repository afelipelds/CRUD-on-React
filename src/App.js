import React, { useState } from 'react';
import AddUserForm from './components/form'
import UserTable from './components/tables';
import {v4 as uuidv4} from 'uuid'


function App() {

	const usersData = [
		{ id: uuidv4(), name: 'Arturo Eslava', username: 'santinsane' },
		{ id: uuidv4(), name: 'Andrés Eslava', username: 'afelipe.ez' },
		{ id: uuidv4(), name: 'Iván Rodríguez', username: 'rodriguezivanb' },		
	]

	// state
	const [users, setUsers] = useState(usersData)

	// add users
	const addUser = (user) => {   	//Recibe el usuario que se registra en el formulario
		user.id = uuidv4()						//Se evitan problemas de id único
		setUsers([...users, user])		//Se devuelve el array con el nuevo dato utilizando setUsers
	}

	return (
		<div className="App container">
			<h1>CRUD App with Hooks</h1>
			<div className={"flex-row"}>
				<div className={"flex-large medium-container"}>
					<h2>Add User</h2>
					<AddUserForm addUser={addUser} />
				</div>
				<div className={"flex-large medium-container"}>
					<h2>View Users</h2>
					<UserTable users={users} />
				</div>
			</div>
		</div>
  );
}

export default App;
