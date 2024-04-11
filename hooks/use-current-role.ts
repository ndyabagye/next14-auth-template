import { useSession } from "next-auth/react";

/**
 * This hook is for getting the current user role in client components
 */
export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user?.role;
};
