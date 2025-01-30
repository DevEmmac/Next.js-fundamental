import React from 'react';

interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
  address: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: Users [] = await res.json();
  return (
    <>
      <h2>Users</h2>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
          <tbody>
            {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td className=''>{user.email}</td>
            <td className=''>{user.username}</td>
            </tr>)}
          </tbody>
      </table>
    </>
   
  )
} 

export default UsersPage;