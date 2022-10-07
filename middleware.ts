import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Token from "./services/token/token";

const unreachableOnLoginPages = ["/login", "/register"];
const unreachableWithoutLoginPages = ["/code", "/dashboard"];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { cookies } = request;
  const url = request.url;
  let isTokenSetted = false;
  const accessToken = cookies.get("accessToken");
  if (accessToken) {
    isTokenSetted = true;
  }
  if (url.endsWith("/")) {
    return changeUrl(request, "/welcome", "rewrite");
  }

  // Redirecting to pages  based on login status
  // if (isRouteInUrl(url, unreachableWithoutLoginPages) && !isTokenSetted) {
  //   return changeUrl(request, "/login");
  // } else if (isRouteInUrl(url, unreachableOnLoginPages) && isTokenSetted) {
  //   return changeUrl(request, "/dashboard");
  // }

  return NextResponse.next();
}

const isRouteInUrl = (url: string, routesArr: string[]) => {
  return routesArr.some((item) => url.includes(item));
};

const changeUrl = (
  request: NextRequest,
  dest: string,
  type: "redirect" | "rewrite" = "redirect"
) => {
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = dest;
  return NextResponse[type](newUrl);
};
