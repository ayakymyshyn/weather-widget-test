import { PropsWithChildren } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/zustand/use-user-store";

interface StartScreenLayoutProps {
  backgroundUrl: string;
}

export const StartScreenLayout = ({
  backgroundUrl,
  children,
}: PropsWithChildren<StartScreenLayoutProps>) => {
  const email = useUserStore((state) => state.email);

  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {email !== null && (
          <span
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            {email}
          </span>
        )}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div
            // Tailwind does not work well with dynamic attributes
            // So that is why inline styles are needed here
            // There might be a better approach
            // But I guess we can move forward with this one for now 
            style={{ backgroundImage: `url(${backgroundUrl})` }}
            className={`absolute inset-0 bg-cover`}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Weather Widget
          </div>
        </div>
        <div className="lg:p-8">{children}</div>
      </div>
    </>
  );
};
