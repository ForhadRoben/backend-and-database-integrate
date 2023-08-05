import { FaEdit, FaEye, FaPlusSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = id => {
        console.log('delete', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'coffee deleted successfully.',
                                'success'
                            )
                            const remainingCoffees = coffees.filter(remaining => remaining._id !== id)
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        })
    }
    return (
        <div className=" bg-[#fbd35c] m-4 ">

            <div className="hero ">
                <div className="hero-content flex-col w-full lg:flex-row justify-evenly">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p>Name:{name}</p>
                        <p>Chef:{chef}</p>
                        <p>Taste:{taste}</p>

                    </div>
                    <div className="join join-vertical gap-2">
                        <Link to={`/coffee-view/${_id}`} className="btn join-item text-red-300"><FaEye />View</Link>
                        <Link to={'/add-coffee'} className="btn join-item text-emerald-400"><FaPlusSquare />Add a Coffee</Link>
                        <Link to={`/update-coffee/${_id}`}><button className="w-full btn join-item text-green-400"><FaEdit />Edit</button></Link>

                        <button onClick={() => handleDelete(_id)} className="btn join-item text-red-600"><FaTrash />Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;