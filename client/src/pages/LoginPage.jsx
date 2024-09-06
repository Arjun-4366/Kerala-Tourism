import React from "react";
import Login from "../components/Signup-login/Login";
import Loading from "../components/common/Loading";

function LoginPage({ loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
}

export default LoginPage;
