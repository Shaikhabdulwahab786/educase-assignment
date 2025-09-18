import type { LoaderFunctionArgs } from "react-router-dom";
import { fakeUsers, type UserData } from "../data/fakeUsrs";
import { protectedLoader } from "../loaders/protectedLoader";

export async function userLoader({ params }: LoaderFunctionArgs): Promise<UserData> {
  await protectedLoader(); 

  const rawId = params.userId;
  if (!rawId) throw new Response("User ID required", { status: 400 });

  const id = /^\d+$/.test(rawId) ? Number(rawId) : rawId;
  const user = fakeUsers.find(u => u.id === id);
  if (!user) throw new Response("User not found", { status: 404 });

  return user;
}

