'use client';
import { FormEvent } from 'react';

export default function ClientForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let { prompt } = Object.fromEntries(new FormData(e.currentTarget));

    let response = await fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });

    let string = await response.json();
    console.log(string);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Prompt</label>
        <input type="text" name="prompt" id="prompt" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
