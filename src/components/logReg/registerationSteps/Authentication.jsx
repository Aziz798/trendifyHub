import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../config/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Authentication = ({ setUser, user }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
        return strongPasswordRegex.test(password);
    }

    const handleGoogleSignIn = async () => {
        const googleProvider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser({ ...user, id: result.user.uid });
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignInWithEmailPassword = async (e) => {
        e.preventDefault();
        try {
            if (!validateEmail(email)) {
                setError("Please enter a valid email address.");
                return;
            }
            if (!validatePassword(password)) {
                setError("Password not strong enough. It must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.");
                return;
            }
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser({ ...user, id: result.user.uid });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSignInWithEmailPassword}>
            {error && <div className="text-error text-center">{error}</div>}
            <div className="flex flex-col ">
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" className="grow" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            </div>
            <div className="flex items-center justify-center gap-12">
                <input type="submit" value="Sign Up" className="btn btn-outline btn-success" />
                <button className="btn btn-outline btn-primary" onClick={handleGoogleSignIn}><FcGoogle />Sign up with Google</button>
            </div>
        </form>
    );
}

export default Authentication;
