import { auth } from "@/auth"; // Importamos a função de autenticação
import { redirect } from "next/navigation";
import { User, Mail, LogIn } from 'lucide-react';

export default async function PerfilPage() {
  // Buscamos a sessão diretamente no servidor
  const session = await auth();

  // Se não houver sessão (usuário não logado), redirecionamos para o login
  if (!session?.user) {
    redirect("/login");
  }

  // Se houver sessão, mostramos as informações do usuário
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Perfil do Usuário
      </h1>
      <div className="space-y-4">
        <div className="flex items-center p-4 border rounded-md">
          <User className="h-6 w-6 mr-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Nome</p>
            <p className="text-lg font-semibold text-gray-900">{session.user.name}</p>
          </div>
        </div>
        <div className="flex items-center p-4 border rounded-md">
          <Mail className="h-6 w-6 mr-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-lg font-semibold text-gray-900">{session.user.email}</p>
          </div>
        </div>
        <div className="flex items-center p-4 border rounded-md bg-gray-50">
          <LogIn className="h-6 w-6 mr-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">ID do Usuário</p>
            <p className="text-lg font-semibold text-gray-900">{session.user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}