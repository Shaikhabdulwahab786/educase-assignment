// src/pages/User/Loader.ts
import type { LoaderFunctionArgs } from "react-router-dom";
import { fakeUsers, type UserData } from "../data/fakeUsrs";

export async function userLoader({ params }: LoaderFunctionArgs): Promise<UserData> {
  const rawId = params.userId;

  if (!rawId) {
    throw new Response("User ID required", { status: 400 });
  }

  const id = /^\d+$/.test(rawId) ? Number(rawId) : rawId;

  const user = fakeUsers.find(u => u.id === id);

  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  return user;
}
