import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Erro ao registrar");
        setLoading(false);
        return;
      }

      const token = data?.token || data?.accessToken || null;
      if (token) localStorage.setItem("token", token);
      setSuccess("Cadastro realizado com sucesso.");
      setLoading(false);
      // redireciona para login
      window.location.href = "/login";
    } catch (err) {
      setError(err?.message || "Erro de conexão");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <main className="flex-1 flex flex-col  items-start justify-center px-6 py-8">
        <form onSubmit={handleRegister} className="pb-5 w-max h-100 ">
          <h1 className="text-xl font-bold text-black mb-4">Cadastra-se</h1>
          {error && <div className="text-red-600 mb-2">{error}</div>}
          {success && <div className="text-green-600 mb-2">{success}</div>}
          <fieldset className="fieldset w-60">
            <legend className="fieldset-legend text-black">Nome</legend>
            <input
              type="text"
              className="input input-neutral bg-white text text-black placeholder-gray-400"
              placeholder="Escreva seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          <legend className="fieldset-legend text-black">Email</legend>
          <label className="input validator input-neutral bg-white">
            <input
              type="email"
              className="  text-black placeholder-gray-400"
              placeholder="Escreva seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden">Entre com um email valido</div>
          </fieldset>
          <fieldset className="fieldset w-60">
          <legend className="fieldset-legend text-black">Senha</legend>
          <label className="input validator bg-white input-neutral">
            <input
              type="password"
              required
              placeholder="Escreva sua senha"
              className="placeholder-gray-400 text-black"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="validator-hint hidden">
            A senha deve ter no minimo 8 caracteres, incluindo:
            <br />Pelo menos 1 numero <br />Pelo menos uma letra minuscula <br />Pelo menos uma letra maiuscula
          </p>
          </fieldset>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary bg-[#15265A] text-white" disabled={loading}>
              {loading ? "Cadastrando..." : "Criar conta"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}