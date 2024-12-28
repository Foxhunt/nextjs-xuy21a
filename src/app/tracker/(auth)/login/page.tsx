"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Form, Input, Button, Link } from "@nextui-org/react";

export default function Login() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [errors, setErrors] = useState<{ message: string }[]>([]);

  return (
    <Form
      validationBehavior="native"
      onSubmit={(event) => {
        event.preventDefault();

        startTransition(async () => {
          const response = await fetch(
            window.location.origin + "/api/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: event.currentTarget.elements["username"].value,
                password: event.currentTarget.elements["password"].value,
              }),
            }
          );

          const data = await response.json();

          if (data.errors) {
            setErrors(data.errors);
            return;
          }

          router.push("/tracker");
        });
      }}
    >
      <Input
        isRequired
        label="Username"
        labelPlacement="inside"
        type="text"
        name="username"
        autoComplete="username"
      />
      <Input
        isRequired
        label="Password"
        labelPlacement="inside"
        type="password"
        name="password"
        autoComplete="current-password"
      />
      {errors.map((error, index) => (
        <p className="text-danger" role="alert" key={index}>
          {error.message}
        </p>
      ))}
      <Button isLoading={isPending} type="submit" className="w-full">
        Login
      </Button>
      <p>
        Don&apos;t have an account yet?{" "}
        <Link href="/tracker/register">Register</Link>
      </p>
    </Form>
  );
}
