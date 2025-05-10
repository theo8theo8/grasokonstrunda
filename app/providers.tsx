// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider className="h-screen grid">{children}</HeroUIProvider>;
}
