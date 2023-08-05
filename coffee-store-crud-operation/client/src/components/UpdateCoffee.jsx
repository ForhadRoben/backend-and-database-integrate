import { FaHome } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const modifyCoffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = modifyCoffee;
    // console.log(modifyCoffee);

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'coffee updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // form.reset() default value set korar er karone reset hobe na

                }

            })
    }
    return (
        <div className="bg-[#F4F3F0]">
            <Link to="/" className="m-5 btn bg-[#aee0e2]"><FaHome /> Go To Home</Link>
            <h1 className="text-center text-2xl ">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex gap-4 px-6 py-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="enter coffee name" defaultValue={name} className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" placeholder="enter coffee chef" defaultValue={chef} className="input input-bordered" />
                    </div>
                </div>
                <div className="md:flex gap-4 px-6 py-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="enter coffee supplier" defaultValue={supplier} className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="enter coffee taste" defaultValue={taste} className="input input-bordered" />
                    </div>
                </div>
                <div className="md:flex gap-4 px-6 py-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="enter coffee category" defaultValue={category} className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="enter coffee details" defaultValue={details} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control px-6 py-2">
                    <label className="label">
                        <span className="label-text">Photos</span>
                    </label>
                    <input type="text" name="photo" placeholder="enter photo url" defaultValue={photo} className="input input-bordered" />
                </div>
                <div className=" px-6 py-2 ">
                    <button type="submit" className="btn bg-[#D2B48C] w-full">Update a coffee</button>
                </div>

            </form>

        </div>

    );
};

export default UpdateCoffee;