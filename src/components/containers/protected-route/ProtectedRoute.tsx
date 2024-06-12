import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes";
import { useUserStore } from "@/zustand/use-user-store";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const email = useUserStore((state) => state.email);

  useEffect(() => {
    if (email === null) {
      navigate(ROUTES.signUp);
    }
  }, [email, navigate]);

  return children;
};
