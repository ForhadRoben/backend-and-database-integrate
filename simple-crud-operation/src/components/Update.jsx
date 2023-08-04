import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUsers = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        fetch(`http://localhost:5000/users/${loadUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('update successfully')
                }
            })
    }
    return (
        <div>
            <h3>user info of {loadUsers.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadUsers?.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadUsers?.email} id="" /><br />
                <input type="submit" value="Update User" />
            </form>

        </div>
    );
};

export default Update;