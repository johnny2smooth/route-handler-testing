"use client";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let { prompt } = Object.fromEntries(new FormData(e.currentTarget));

    let response = await fetch("api/hello", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    let string = await response.json();
    console.log(string);
  }
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Prompt</label>
        <input type="text" name="prompt" id="prompt" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
