'use client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Move Recife</h1>
      <p className="text-lg mb-4">Your gateway to exploring Recife with ease.</p>
      <div className="space-x-4">
        <a href="/login" className="btn btn-neutral">Login</a>
        <a href="/register" className="btn btn-secondary">Register</a>
        <a href="/homepage" className="btn btn-info">Home PAge</a>

      </div>
    </div>
  );
}