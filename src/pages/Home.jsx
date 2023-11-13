import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { NeonH1 } from "react-neon-components";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import ReactiveButton from "reactive-button";

export default function Home() {
  return (
    <GlowCapture>
      <Glow>
        <div
          style={{
            backgroundColor: "#202124",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img
            src="/assets/bautom.png"
            alt=""
            style={{
              width: "350px",
              marginTop: "-40px",
              marginBottom: "50px",
              border: "1px solid #8A2BE2 ",
              borderRadius: "10px",
            }}
          />
          <NeonH1
            color="#8A2BE2"
            effect="flicker"
            fontSize="20px"
            style={{ marginBottom: "20px" }}
          >
            Chào mừng bạn đến với trại nghiện cá độ bầu tôm cua cá
          </NeonH1>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/login">
              {" "}
              <ReactiveButton
                size="large"
                idleText="Login"
                color="violet"
                rounded
                shadow
              />{" "}
            </Link>
            <Link to="/register">
              {" "}
              <ReactiveButton
                size="large"
                idleText="Register"
                color="violet"
                rounded
                shadow
              />{" "}
            </Link>
          </div>
        </div>
      </Glow>
    </GlowCapture>
  );
}
