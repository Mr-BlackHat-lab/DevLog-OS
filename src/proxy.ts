export { auth as proxy } from "@/auth";

export const config = {
  matcher: ["/logs/:path*", "/dashboard/:path*"],
};
