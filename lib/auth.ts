import { auth } from "@/auth";

/**
 * This lib is for getting the current user in server components
 */
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
