export default function Register() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <main className="flex-1 flex flex-col  items-start justify-center px-6 py-8">
        <div className="pb-5 w-max h-100 ">
          <h1 className="text-xl font-bold text-black mb-4">Cadastra-se</h1>
          <fieldset className="fieldset w-60">
            <legend className="fieldset-legend text-black">Nome</legend>
            <input type="text" className="input input-neutral bg-white text text-black placeholder-gray-400" placeholder="Escreva seu nome" />
          <legend className="fieldset-legend text-black">Email</legend>
          <label className="input validator input-neutral bg-white">
            <input type="email" className="  text-black placeholder-gray-400" placeholder="Escreva seu email" required />
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
            />
          </label>
          <p className="validator-hint hidden">
            A senha deve ter no minimo 8 caracteres, incluindo:
            <br />Pelo menos 1 numero <br />Pelo menos uma letra minuscula <br />Pelo menos uma letra maiuscula
          </p>
          </fieldset>

        </div>
        
      </main>
    </div>
  );
}