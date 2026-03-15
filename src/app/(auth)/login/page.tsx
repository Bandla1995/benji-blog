"use client"
import AuthForm from "../AuthForm";

export default function Login() {

    interface HandleSubmitEvent {
        e: React.FormEvent<HTMLFormElement>
    }

    interface HandleSubmitCredentials {
        email: string
        password: string
    }

    const handleSubmit = async (
        e: HandleSubmitEvent["e"],
        email: HandleSubmitCredentials["email"],
        password: HandleSubmitCredentials["password"]
    ): Promise<void> => {
        e.preventDefault()

        console.log('user login:', email, password)
    }
    return (
        <main>
            <h2 className="text-center">Log in</h2>

            <AuthForm handleSubmit={handleSubmit} />
        </main>
    )
}