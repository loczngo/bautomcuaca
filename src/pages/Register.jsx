import React, { useRef } from "react";
import { NeonH6 } from "react-neon-components";
import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";
import axios from "axios";

export default function Register() {
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const HandleChange = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    console.log(email.current.value);
  };
  const HandleSubmit = (e) => {
    const data = {
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
    };
    e.preventDefault();
    console.log("submit");
    axios
      .post("http://localhost:1337/api/auth/local/register", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
      <form
        action=""
        onSubmit={HandleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <NeonH6 color="#8A2BE2" effect="flicker" fontSize="15px">
          Email
        </NeonH6>
        <input
          onChange={HandleChange}
          ref={email}
          name="username"
          type="email"
          style={{
            color: "violet",
            fontWeight: "bolder",
            padding: "10px",
            width: "250px",
            border: "2px solid 	#8A2BE2",
            background: "none",
            borderRadius: "5px",
          }}
        />
        <NeonH6 color="#8A2BE2" effect="flicker" fontSize="15px">
          Username
        </NeonH6>
        <input
          onChange={HandleChange}
          ref={username}
          name="username"
          type="text"
          style={{
            color: "violet",
            fontWeight: "bolder",
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
          onChange={HandleChange}
          name="password"
          ref={password}
          type="password"
          style={{
            color: "violet",
            fontWeight: "bolder",
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
          idleText="Submit"
          shadow
          rounded
        />
        <Link to="/login">
          <ReactiveButton
            style={{ marginTop: "40px" }}
            type={"submit"}
            color="teal"
            idleText="Login"
            width="270px"
            shadow
            rounded
          />
        </Link>
      </form>
    </div>
  );
}
