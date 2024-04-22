

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

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
                        <button className="btn join-item">VIEW</button>
                        <button className="btn join-item">EDIT</button>
                        <button className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;