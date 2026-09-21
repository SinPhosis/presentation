import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.14] via-cyan-200/[0.06] to-blue-950/[0.16] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] ring-1 ring-inset ring-cyan-100/[0.05] backdrop-blur-2xl transition duration-500 hover:border-cyan-100/30 hover:bg-white/[0.12] hover:shadow-[0_24px_70px_rgba(34,211,238,0.12)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-200/10 blur-3xl transition duration-500 group-hover:bg-cyan-200/20" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
