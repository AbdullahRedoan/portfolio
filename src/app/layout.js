import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah Redoan | Full-Stack Web Developer & Undergraduate Student",
  description:
    "Portfolio of Abdullah Redoan - Full-Stack Web Developer (MERN Stack, Next.js, Tailwind CSS) & English Literature Undergraduate Student at Jagannath University, Dhaka. Web Design & Programming Instructor.",
  keywords: [
    "Abdullah Redoan",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Tailwind CSS",
    "Jagannath University",
    "Creative Zone IT Instructor",
    "Web Development",
    "JavaScript",
  ],
  authors: [{ name: "Abdullah Redoan" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F8FAFC] antialiased selection:bg-[#6366F1] selection:text-white transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
