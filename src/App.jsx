import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './styles.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

//document.body.style.backgroundColor =  "grey";

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data));
  }, []);
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data));
  };
  const selectUser = (user) => {
    setUserSelected(user);

  };
  const deselectUser = () => setUserSelected(null);

  //console.log(users);
  const [editing, setEditing] = useState(false);
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            {(editing) ? (
              <div>

              </div>
            ) : (
              <div>
                <UsersForm
                  getUsers={getUsers}
                  userSelected={userSelected}
                  deselectUser={deselectUser}

                />
              </div>)}

            <UsersList
              selectUser={selectUser}
              users={users}
              getUsers={getUsers}
              setEditing={setEditing}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
