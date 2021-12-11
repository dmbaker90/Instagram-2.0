import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    // theme: {
    //     logo: "https://links.papareact.com/sq0",
    //     brandColor: "#F13287",
    //     colorScheme: "auto"
    // },
    pages: {
        signIn: "/auth/signin"
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
                .split(' ').join('').toLocaleLowerCase();
            session.user.uid = token.sub;
            return session;
        }
    },
    secret: "+qB1Ep7aY475aY8Szvll61aiQCPW/dzOkRCoyHOMg2s="
})