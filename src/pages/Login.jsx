import axios from "axios";
import React, { useRef, useState } from "react";
import { NeonH6 } from "react-neon-components";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import ReactiveButton from "reactive-button";

export default function Login() {
  const error = ["invalid"];
  const [errors, setErrors] = useState([]);
  const [datajson, setDatajson] = useState([]);
  const [token, setToken] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const data = {
    identifier: username,
    password: password,
  };
  const handleUser = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    console.log(username);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", data)
      .then((response) => {
        setErrors([]);
        console.log(response.data);
        navigate("/game");
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
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <NeonH6 color="#8A2BE2" effect="flicker" fontSize="15px">
          Username
        </NeonH6>
        <input
          onChange={handleUser}
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
          onChange={handlePass}
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
