import React from "react";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Footer from "@/components/footer";

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
        <div className="px-72">
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
