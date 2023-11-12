export default function Register() {
  return (
    <main className="flex flex-col justify-center items-center border-2 rounded-lg p-4 max-w-[50%] mr-auto ml-auto mt-14">
      <h1 className="text-4xl font-bold text-yellow-400">Cadastro</h1>
      <p className="text-xl mt-3">
        Crie sua conta e começe a{" "}
        <span className="text-yellow-400 font-semibold">Batalha</span>
      </p>

      <form
        action="#"
        method="POST"
        className="flex flex-col justify-center items-start mt-8 gap-4 w-[40%]"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="username" className="text-yellow-400 font-semibold">
            Usuário
          </label>
          <input
            type="text"
            id="username"
            placeholder="ex: Pikachu99"
            required
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-yellow-400 font-semibold">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="ex: 123Ashe"
            required
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
        </div>

        <input
          type="submit"
          value="Registrar"
          className="w-full border p-2 mt-4 bg-green-500 text-xl font-bold text-stone-800 rounded-lg cursor-pointer hover:bg-green-400 mb-4"
        />
      </form>
    </main>
  );
}
