import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        if (userSelected) {
            reset(userSelected);
        }
    }, [userSelected]);

    const submit = (data) => {
        //console.log(data);

        if (userSelected) {
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => getUsers())
                .catch(error => console.log(error.response));
        } else {
            axios
                .post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response));

        }
        clear();
    };
    const clear = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        });
        deselectUser();
    };
    return (

        <form onSubmit={handleSubmit(submit)} className="form-react">
            <h1>Users form</h1>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" id="name" {...register("email")} />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <div className="form-control">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" {...register("first_name")} />
            </div>
            <div className="form-control">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" {...register("last_name")} />
            </div>
            <div className="form-control">
                <label htmlFor="birthday">Birth Day</label>
                <input type="date" id="birthday" {...register("birthday")} />
            </div>
            <button>submit</button>
            <button onClick={clear} type="button">
                Clear
            </button>
        </form>



    );
};

export default UsersForm;