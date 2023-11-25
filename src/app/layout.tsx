import { ReactNode } from "react";
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
