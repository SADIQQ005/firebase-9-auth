import React, { useState } from "react";
import { auth } from "../firebase";

import { sendPasswordResetEmail } from "firebase/auth";

import Link from "next/link";

export default function password() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleReset(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("password reset email sent");
        setMessage("Check your email to reset passowrd");
      })
      .catch((error) => {
        console.log(error);
        setError("Email not found");
        // ..
      });
  }

  return (
    <div>
      <div className="w-1/3 mx-auto">
        <h2 className="text-center font-mono font-extrabold mt-32 text-2xl">
          Firebase 9 authentication <br /> Password Reset Page
        </h2>

        <form onSubmit={handleReset}>
          {message && (
            <p className="text-center text-xs mt-3 text-green-400">{message}</p>
          )}
          {error && (
            <p className="text-center text-xs mt-3 text-red-400">{error}</p>
          )}
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

          <input
            type="submit"
            className="bg-teal-800 w-full mt-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center"
          />
          <p className="text-center text-xs mt-4">
            <Link href="/">
              <a className="text-blue-700">Cancel</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
