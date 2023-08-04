
import './app.css'

const App = () => {

    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        // console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('data inserted successfully')
                    form.reset()
                }
            })

    }


    return (
        <div>
            <h1>Simple crud operation</h1>
            <form onSubmit={handleUser}>
                <input type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default App;