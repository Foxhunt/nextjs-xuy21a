"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Form, Input, Button, Link } from "@nextui-org/react";

import { User } from "../../../../../payload-types.ts";

export default function Register() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [errors, setErrors] = useState({});

  return (
    <Form
      validationBehavior="native"
      onSubmit={(event) => {
        event.preventDefault();

        if (
          event.currentTarget.elements["password"].value !==
          event.currentTarget.elements["confirm-password"].value
        ) {
          setErrors({
            "confirm-password": ["Passwords do not match"],
          });

          return;
        }

        startTransition(async () => {
          const username = event.currentTarget.elements["username"].value;
          const email = event.currentTarget.elements["email"].value;
          const password = event.currentTarget.elements["password"].value;

          const registerResponse = await fetch(
            window.location.origin + "/api/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, email, password } as User),
            }
          );

          const registerData = await registerResponse.json();

          if (registerData.errors?.length > 0) {
            const errors = registerData.errors
              ?.flatMap((error) => error.data.errors)
              .reduce((acc, error) => {
                if (acc[error.path]) {
                  acc[error.path].push(error.message);
                } else {
                  acc[error.path] = [error.message];
                }
                return acc;
              }, {});

            setErrors(errors);
          } else {
            await fetch(window.location.origin + "/api/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, email, password }),
            });

            router.push("/tracker");
          }
        });
      }}
      validationErrors={errors}
    >
      <Input
        type="text"
        isRequired
        name="username"
        label="Username"
        labelPlacement="inside"
        autoComplete="username"
      />
      <Input
        type="email"
        name="email"
        label="E-Mail"
        labelPlacement="inside"
        autoComplete="email"
      />
      <Input
        type="password"
        isRequired
        name="password"
        label="new Password"
        labelPlacement="inside"
        autoComplete="new-password"
      />
      <Input
        type="password"
        isRequired
        name="confirm-password"
        label="confirm Password"
        labelPlacement="inside"
      />
      <Button isLoading={isPending} type="submit" className="w-full">
        Register
      </Button>
      <p>
        Already have an account? <Link href="/tracker/login">Login</Link>
      </p>
    </Form>
  );
}
