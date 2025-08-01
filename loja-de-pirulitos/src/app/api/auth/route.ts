import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // O nome que será exibido no formulário de login (opcional)
      name: "Credentials",
      // `credentials` é usado para gerar um formulário na página de login padrão.
      // Você pode especificar os campos que espera no seu formulário de login.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seu@email.com" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
        // AQUI é onde você adicionará a lógica para buscar o usuário no seu banco de dados.
        // Por enquanto, vamos usar dados mockados para simular um login.
        
        if (credentials?.email === "usuario@teste.com" && credentials?.password === "123456") {
          // Se a autenticação for bem-sucedida, retorne um objeto de usuário.
          // Este objeto será codificado no JWT.
          return { id: "1", name: "Usuário Teste", email: "usuario@teste.com" };
        }
        
        // Se as credenciais estiverem incorretas, retorne null.
        // Isso informará ao NextAuth que o login falhou.
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', // Redireciona os usuários para sua página de login customizada
  }
});

export { handler as GET, handler as POST };