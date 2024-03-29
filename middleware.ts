import { auth } from "@/auth";

export default auth((req) => {
  console.log("Route:", req.nextUrl);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
