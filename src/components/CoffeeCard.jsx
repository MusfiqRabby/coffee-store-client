import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee,
    coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = () =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            } )
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
               Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              })
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
                }
            })
            }
          });
    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl ">
            <figure><img src={photo} /></figure>
            <div className="flex justify-between w-full pr-4">
               <div>
                <h2 className="card-title">Name: {name}</h2>
               <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <p>Taste: {taste}</p>
               </div>
           <div className="card-actions justify-end space-y-4">
            <div className="join join-vertical">
            <button className="btn ">VIEW</button>
          <Link to={`updateCoffee/${_id}`}>
          <button className="btn ">EDIT</button>
          </Link>
            <button 
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;