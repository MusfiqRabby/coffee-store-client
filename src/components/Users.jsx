import { useLoaderData } from "react-router-dom";




const Users = () => {
   
   const loadedData = useLoaderData()
   
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        loadedData.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>Blue</td>
          </tr>)
     }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;