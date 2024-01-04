import React from "react";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user && (
        <div className="container">
          <h1>{user.name}</h1>
          <img src={user.photo} className="rounded-circle" alt="..." />
        </div>
      )}
    </>
  );
}
