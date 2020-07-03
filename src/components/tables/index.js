import React from 'react'

const UserTable = ( props ) => {
	console.log('props', props)

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{
					props.users.length > 0 
					? props.users.map( user => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>
									<button className={"button muted-button"}>Edit</button>
									<button className={"button muted-button"}>Delete</button>
								</td>
							</tr>
						))	
					: <div colSpan={3}>
							<h2>There's no data to show</h2>
						</div>
				}
			</tbody>
		</table>
	)
}

export default UserTable