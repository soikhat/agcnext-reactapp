import { ReactNode } from "react";

export const CardHeader = ({ children }: { children: ReactNode }) => (
  <div className="mb-3 font-semibold text-xl text-primary">{children}</div>
);
