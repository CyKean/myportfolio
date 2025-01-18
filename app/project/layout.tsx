export default function ProjectLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
            {children}
        </div>
    )
}   