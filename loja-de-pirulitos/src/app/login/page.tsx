export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Acesse sua Conta</h2>
        
        {/* Formulário de Login */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-sm text-center text-gray-600">
            Não tem uma conta?{' '}
            <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
              Cadastre-se aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}