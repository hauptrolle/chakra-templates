import { ReactNode } from "react";

import { HeaderBar } from "@/components/HeaderBar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <HeaderBar />
      {children}
    </>
  );
};
