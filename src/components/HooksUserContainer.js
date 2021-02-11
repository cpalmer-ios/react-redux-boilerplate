import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function HooksCakeContainer() {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Fetch Users with Hooks</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => (
                <>
                  <p>{user.id}</p>
                  <p>{user.name}</p>
                  <p>{user.email}</p> 
                  <p>{user.website}</p>
                </>
              ))}
          </div>
        </div>
      )}

      
    </div>
  );
}

export default HooksCakeContainer;
