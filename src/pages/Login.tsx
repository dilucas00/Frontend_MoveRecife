import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Erro ao efetuar login");
        setLoading(false);
        return;
      }

      // tenta extrair token de formas comuns
      const token = data?.token || data?.accessToken || data?.data?.token || null;
      if (token) {
        localStorage.setItem("token", token);
      }
      setSuccess("Login realizado com sucesso.");
      setLoading(false);
      // redireciona para página inicial
      window.location.href = "/";
    } catch (err: any) {
      setError(err?.message || "Erro de conexão");
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      // Este endpoint normalmente espera um token do Google (idToken).
      // Aqui fazemos uma chamada simples; ajuste para incluir o idToken quando integrar o SDK do Google.
      const res = await fetch("/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Erro no login com Google");
        setLoading(false);
        return;
      }
      const token = data?.token || data?.accessToken || null;
      if (token) localStorage.setItem("token", token);
      setSuccess("Login com Google realizado.");
      setLoading(false);
      window.location.href = "/";
    } catch (err: any) {
      setError(err?.message || "Erro de conexão");
      setLoading(false);
    }
  }

  return (
    <div className="h-screen bg-white flex  flex-col transform scale-115">
      <main className="flex-1 flex flex-col items-center justify-center h-full">
        <div className="w-92  h-50 mb-10  mt-30 flex justify-start items-start ">
          <img src="/logo.png" alt="Logo Move Recife" className=" object-contain w-80 h-80  " />
        </div>
        <div className=" w-max h-50 mb-15 ">

          <h1 className="text-xl  font-medium  text-black mb-4">Entre com a sua conta</h1>
          <fieldset className="fieldset w-70">
          <legend className="fieldset-legend text-black">Email</legend>
          <label className="input validator input-neutral bg-white rounded-2xl ">
            <input
              type="email"
              className=" text-black placeholder-gray-400"
              placeholder="Escreva seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden">Entre com um email valido</div>
           </fieldset>
          <fieldset className="fieldset w-70">
          <legend className="fieldset-legend  text-black">Senha</legend>
          <label className="input validator bg-white input-neutral rounded-2xl ">
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
          <p className="text-gray-400 ">Esqueceu sua senha? <span className="text-[#15265A] font-semibold underline cursor-pointer"> Clique aqui! </span></p>
          <p className="validator-hint hidden">
            A senha deve ter no minimo 8 caracteres, incluindo:
            <br />Pelo menos 1 numero <br />Pelo menos uma letra minuscula <br />Pelo menos uma letra maiuscula
          </p>
          </fieldset>
        </div>
        <div className="w-75 flex items-center justify-center ">
          <p className="text-gray-800 text-sm underline ">Não tem uma conta? <a href="/register" className="text-[#15265A] font-semibold cursor-pointer"> Crie já </a></p>
        </div>
          <div className="w-70 flex flex-col gap-2 items-center justify-center ">
              {error && <div className="text-red-600 mb-2">{error}</div>}
              {success && <div className="text-green-600 mb-2">{success}</div>}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="btn btn-lg  bg-[#15265A] text-white mt-10"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <div className="divider w-70 divider-vertical text-gray-500">OU</div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login com Google
              </button>
              <button className="btn bg-black text-white border-black">
                <svg aria-label="Apple logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
                Login com Apple
              </button>
          </div>
       
      </main>
    </div>
  );
}