import { FaHome } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeView = () => {
    const coffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <Link to="/" className="m-5 btn bg-[#aee0e2]"><FaHome /> Go To Home</Link>
            <div className="card  mx-auto w-1/2 glass text-center bg-[#F5F4F1]">
                <figure><img src={photo} className="w-1/2 h-1/2" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Chef:{chef}</p>
                    <p>Supplier:{supplier}</p>
                    <p>Taste:{taste}</p>
                    <p>Category:{category}</p>
                    <p>Details:{details}</p>
                </div>
            </div>

        </div>
    );
};

export default CoffeeView;