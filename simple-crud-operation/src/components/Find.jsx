import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Find = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers)
    const handleDelete = id => {
        console.log('delete', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('data deleted successfully');
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }

            })
    }
    return (
        <div>
            <h3>Total Users:{users.length}</h3>
            {
                users.map(user => <p
                    key={user._id}>
                    {user._id} :
                    {user.name} :
                    {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Find;