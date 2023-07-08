import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { 
          label: "Email", 
          type: "text", 
          placeholder: "jsmith@gmail.com" 
        },
        password: { 
          label: "Password", 
          type: "password" 
        } 
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        if (email || password) {
          return true
        } else {
          return null
        }
      }
    })
  ],

  secret: process.env.JWT_SECRET
} 
export default NextAuth(authOptions)