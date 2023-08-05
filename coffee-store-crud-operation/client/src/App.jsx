import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const App = () => {
    const loadCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadCoffees)
    console.log(coffees);
    return (
        <div >
            <h1 className="text-center text-2xl">Our popular coffees: {coffees.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}>
                    </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default App;