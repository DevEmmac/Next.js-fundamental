import React from 'react';

interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
  address: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users [] = await res.json();
  return (
    <>
      <h2>Users</h2>
      <div>
        {users.map(user => <ul key={user.id} className=''>
          <li >{user.name}</li>
          <li className='pl-10 bg-slate-400 w-fit'>{user.email}</li>
          <li className='p-8'>{user.username}</li>
          </ul>)}

      </div>
    </>
   
  )
}

export default UsersPage;