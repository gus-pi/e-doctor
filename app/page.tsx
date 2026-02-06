import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <SignedOut>
                <SignUpButton>Sign Up</SignUpButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>Log Out</SignOutButton>
            </SignedIn>
        </div>
    );
}
