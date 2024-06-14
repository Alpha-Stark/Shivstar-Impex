import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
    publicRoutes: ["/", "/api/webhook/clerk", "/api/webhook/clerk/(.*)"],
    ignoreRoutes: ["/api/webhook/clerk/(.*)"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
