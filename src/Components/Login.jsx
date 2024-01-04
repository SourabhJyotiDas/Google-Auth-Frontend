import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googlelogin, login } from "../redux/actions/user";
import { server } from "../redux/store";

export default function Login() {
  const { isAuthenticated, user, error, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  let myServer = "http://localhost:5000/api/v1";

  const handleGoogle = () => {
    window.open(`${myServer}/googlelogin`, "_self");
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleGoogle}>
        Google
      </button>
    </>
  );
}
