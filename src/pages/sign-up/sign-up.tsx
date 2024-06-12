import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignUpForm } from "@/components/containers/sign-up-form";
import { StartScreenLayout } from "@/components/layouts/start-screen-layout";
import { ROUTES } from "@/constants/routes";
import { useUserStore } from "@/zustand/use-user-store";

export const SignUp = () => {
  const updateUserEmail = useUserStore((state) => state.updateUserEmail);
  const email = useUserStore((state) => state.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (email !== null) {
      navigate(ROUTES.selectCity);
    }
  }, [email, navigate]);

  return (
    <StartScreenLayout backgroundUrl="/weather.jpg">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign-up to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to sign-up
          </p>
        </div>
        <SignUpForm
          onSubmit={(e) => {
            e.preventDefault();
            try {
              const formData = new FormData(e.target as HTMLFormElement);
              const email = formData.get("email")?.toString();
              updateUserEmail(email ?? null);
              navigate(ROUTES.selectCity);
            } catch (error) {
              console.error("Something went wrong!");
            }
          }}
        />
      </div>
    </StartScreenLayout>
  );
};
