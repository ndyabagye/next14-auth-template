import { useSession } from "next-auth/react";

/**
 * This hook is for getting the current user in client components
 */
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
