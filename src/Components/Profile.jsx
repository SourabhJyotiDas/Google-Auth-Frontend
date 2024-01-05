import { logDOM } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  // console.log(user);
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
