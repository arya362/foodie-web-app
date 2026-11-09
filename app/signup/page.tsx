"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
setMessage("");
setLoading(true);

try {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    setMessage(data.message || "Signup failed. Please try again.");
    return;
  }

  setMessage("Account created successfully!");
  setName("");
  setEmail("");
  setPassword("");
} catch {
  setMessage("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}

}

return (
<main className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-10">
<div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
<Link href="/" className="text-sm text-orange-600 hover:underline">
Back to Home
</Link>

    <h1 className="mt-6 text-3xl font-bold text-gray-900">
      Create Account
    </h1>

    <p className="mt-2 text-gray-600">
      Sign up to get started with Foodie.
    </p>

    <form onSubmit={handleSignup} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 8 characters"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

      {message && (
        <p role="status" className="text-sm text-gray-700">
          {message}
        </p>
      )}
    </form>

    <p className="mt-6 text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link href="/login" className="font-semibold text-orange-600 hover:underline">
        Log in
      </Link>
    </p>
  </div>
</main>

);
}