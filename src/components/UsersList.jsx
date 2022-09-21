import React from 'react';
import axios from 'axios';

const UsersList = ({ users, selectUser, getUsers }) => {
    const deleteUser = (id) => {
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers());
    };

    return (
        <div className='user-container'>
            <div >
                <h1>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className='user-card'>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <div>
                                <b>Email: </b>
                                {user.email}
                            </div>
                            <div>
                                <b>Cumpleaños</b>
                                {user.birthday}
                            </div>
                            <button onClick={() => selectUser(user)}>
                                Edit
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default UsersList;