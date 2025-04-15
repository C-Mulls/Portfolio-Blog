'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, note }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setMessage(data.message || 'Something went wrong.');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          id="contact"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800"
        />
        <textarea
          placeholder="Your message"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800"
        />
        <button type="submit" className="bg-primary-500 text-white font-medium hover:bg-primary-400 px-4 py-2 rounded">
          Send
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
