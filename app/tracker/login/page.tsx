"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        await fetch(window.location.origin + "/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: event.currentTarget.elements["username"].value,
            password: event.currentTarget.elements["password"].value,
          }),
        });

        router.push("/tracker");
      }}
    >
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}
