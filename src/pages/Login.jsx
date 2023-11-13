import React, { useState } from "react";
import { NeonH6 } from "react-neon-components";
import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";

export default function Login() {
  return (
    <div
      style={{
        backgroundColor: "#202124",
        height: "100vh",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <NeonH6 color="#8A2BE2" effect="flicker" fontSize="15px">
          Username
        </NeonH6>
        <input
          name="username"
          type="text"
          style={{
            padding: "10px",
            width: "250px",
            border: "2px solid 	#8A2BE2",
            background: "none",
            borderRadius: "5px",
          }}
        />
        <NeonH6 color="#8A2BE2" effect="flicker" fontSize="15px">
          Password
        </NeonH6>
        <input
          name="password"
          type="text"
          style={{
            padding: "10px",
            width: "250px",
            border: "2px solid 	#8A2BE2",
            background: "none",
            borderRadius: "5px",
          }}
        />
        <ReactiveButton
          style={{ marginTop: "20px" }}
          type={"submit"}
          color="violet"
          idleText="Login"
          shadow
          rounded
        />
        <Link to="/register" style={{ width: "250px" }}>
          <ReactiveButton
            style={{ marginTop: "40px" }}
            type={"submit"}
            color="teal"
            idleText="Register"
            width="270px"
            shadow
            rounded
          />
        </Link>
      </form>
    </div>
  );
}
