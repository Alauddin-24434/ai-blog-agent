"use client";

import { createContext, useState, ReactNode } from "react";

export const UserContext = createContext<any>(null);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}
