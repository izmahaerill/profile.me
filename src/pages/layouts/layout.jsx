import React from "react";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/themes/theme-provider";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navigation />
        <main className="px-72 pt-24">{children}</main>
      </ThemeProvider>
    </>
  );
}
