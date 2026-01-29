"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
    LayoutDashboard,
    Building2,
    FolderOpen,
    Settings,
    FileText,
    Zap, // Added icon
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            color: "text-sky-500",
        },
        {
            label: "Projetos",
            icon: FolderOpen,
            href: "/projetos",
            color: "text-violet-500",
        },
        {
            label: "Empresas",
            icon: Building2,
            href: "/empresas",
            color: "text-pink-700",
        },
        {
            label: "Produção de Docs",
            icon: FileText,
            href: "/documentos",
            color: "text-emerald-500",
        },
        {
            label: "Configurações",
            icon: Settings,
            href: "/configuracoes",
        },
    ];

    return (
        <div className={cn("pb-12 space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white", className)}>
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-10 h-10 mr-3 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
                        <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                            PRODOC
                        </h1>
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-widest">
                            POSTES
                        </span>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname.startsWith(route.href) ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* User profile section removed */}
        </div>
    );
}
