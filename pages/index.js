import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { useRouter } from "next/router";
import Link from "next/link";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logged In" + { userCredential });
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  }

  return (
    <div className="w-1/3 mx-auto">
      <h2 className="text-center font-mono font-extrabold mt-32 text-2xl">
        Firebase 9 authentication <br /> LogIn Page
      </h2>

      <form onSubmit={handleLogin}>
        <div className="my-2 flex flex-col">
          <label className="text-teal-800 font-bold text-lg tracking-wide">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="E-mail"
            className="bg-none border-4 border-teal-900 p-1 focus:outline-none rounded-xl font-bold text-teal-800"
          />
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-teal-800 font-bold text-lg tracking-wide">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="bg-none border-4 border-teal-900 p-1 focus:outline-none rounded-xl font-bold text-teal-800"
          />
        </div>
        <input
          type="submit"
          className="bg-teal-800 w-full mt-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center"
        />
        <p className="text-center text-xs mt-4">
          Don't have an account{" "}
          <Link href="/signup">
            <a className="text-blue-700">sign Up</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
