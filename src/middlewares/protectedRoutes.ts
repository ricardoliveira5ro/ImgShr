import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./MiddlewareFactory";

export const protectedRoutes: MiddlewareFactory = (next) => {
    return async(request: NextRequest, _next: NextFetchEvent) => {
        const { pathname } = request.nextUrl;

        const protectedRoutes = ["/api/health", "/api/sign-url", "/api/upload-image"];

        if (protectedRoutes.includes(pathname)) {
            const authHeader = request.headers.get("authorization");
            const token = `Bearer ${process.env.API_ROUTES_SECRET}`;

            if (authHeader !== token) {
                return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
                    status: 401,
                    headers: { "Content-Type": "application/json" },
                });
            }
        }

        return next(request, _next);
    };
}