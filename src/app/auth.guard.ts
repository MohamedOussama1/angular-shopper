import { CanActivateFn } from '@angular/router';
import {decodeJwt, JWTPayload} from "jose";

export const authGuard: CanActivateFn = (route, state) => {
  const AUTH_KEY = "access_token"
  const jwt : string | null = localStorage.getItem(AUTH_KEY);
  if (jwt) {
    const decoded : JWTPayload= decodeJwt(jwt);
    const claimedUserId : string | undefined = decoded.sub;
    const userId = route.params["id"]
    if (claimedUserId == userId)
      return true;
  }
  return false;
};
