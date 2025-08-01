import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "usuario@teste.com" && credentials?.password === "123456") {
          return { id: "1", name: "Usuário Teste", email: "usuario@teste.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
})