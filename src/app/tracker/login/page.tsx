"use client";

import { useRouter } from "next/navigation";

import { Form, Input, Button } from "@nextui-org/react";

export default function Login() {
  const router = useRouter();

  return (
    <Form
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
      <Input
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="username"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <Button type="submit" className="w-full">
        Login
      </Button>
    </Form>
  );
}
