import { ReactNode } from "react";

import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <HeaderBar />
      {children}
      <Footer />
    </>
  );
};
