import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
   
   const loadedData = useLoaderData()
   const [users, setUsers] = useState(loadedData);

  const handleDelete = id =>{
    // make sure user to confirm delete
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(users)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount> 0){
        Swal.fire({
          title: 'Success!',
          text: 'Delete Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        // remove the user from the ui
        const remainingUsers = users.filter(user => user._id !== id)
        setUsers(remainingUsers);
      }
    })
  }

   
    return (
        <div>
            <h2>Users: {loadedData.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
       <button
       onClick={() =>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;