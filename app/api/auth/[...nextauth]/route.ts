import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: any = {
  providers: [
    // Email/Password as fallback (minimal required fields)
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        // For now, allow any email/password combination
        // In production, you'd hash passwords and verify against database
        return {
          id: "1",
          email: credentials.email,
          name: credentials.email.split("@")[0],
        }
      }
    })
  ],
  
  callbacks: {
    async signIn({ user, account, profile }: any) {
      return true
    },
    
    async session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
    
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  
  pages: {
    error: "/auth/error",
  },
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
