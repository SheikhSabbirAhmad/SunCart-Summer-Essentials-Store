"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

import Lottie from "lottie-react";
import animationData from "@/lottie/summer.json";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });

    if (error) {
      toast.error("Signup failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    if (data) {
      toast.success(
        "Account created successfully! Redirecting to sign in...",
        {
          position: "top-right",
          autoClose: 2500,
          theme: "colored",
        }
      );

      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    }
  };

  const handlGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Redirecting to Google sign up...", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Google sign up failed. Try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
      
      {/* Lottie Animation */}
      <div className="w-[400px]">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Sign Up Card */}
      <Card className="border mx-auto w-125 py-10 px-6 rounded-3xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">
          Register Now
        </h1>

        <Form
          className="flex w-96 mx-auto flex-col gap-4"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              className="rounded-full"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input
              placeholder="Enter your Photo Url"
              className="rounded-full"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>

            <Input
              placeholder="john@example.com"
              className="rounded-full"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input
              placeholder="Enter your password"
              className="rounded-full"
            />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          <div className="w-full mt-3">
            <Button
              type="submit"
              className="w-full rounded-full bg-lime-400 text-white font-semibold text-lg py-6 hover:scale-105 transition"
            >
              <Check />
              Register
            </Button>
          </div>
        </Form>

        <p className="text-left mt-5 text-lg">
          Already Have An Account ?{" "}
          <Link
            href="/signin"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>

        <div className="my-5 text-center text-gray-500">
          ---------------- Or ----------------
        </div>

        <Button
          onClick={handlGoogleSignUp}
          variant="outline"
          className="w-full rounded-full py-6"
        >
          <GrGoogle />
          Sign Up With Google
        </Button>
      </Card>
    </div>
  );
}