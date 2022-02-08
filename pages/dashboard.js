import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

function dashboard() {
  const router = useRouter();

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("you are logged out");
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div>
      <h2 className="text-center font-mono text-xl">
        Hello mate. <br /> welcome aboard
      </h2>
      <div className="w-1/3 mx-auto">
        <form onSubmit={handleLogOut}>
          <button className="bg-teal-800 w-full mt-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
export default dashboard;
