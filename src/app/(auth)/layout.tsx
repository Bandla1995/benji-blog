import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            
            <nav>
                <h1>Benji blog</h1>
                <Link href="/signup">Signup</Link>
                <Link href="/login">Login</Link>
            </nav>
            {children}
        </>
    )
}
  