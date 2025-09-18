import { redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export async function protectedLoader() {
  if (!isAuthenticated()) {
    throw redirect("/login");
  }
  return null;
}
