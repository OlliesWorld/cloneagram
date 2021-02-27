import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'


export default function SignUp() {
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [username, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = emailAddress === '' || password === ''

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        }
    }

    useEffect(() => {
        document.title = 'Sign Up - Instagram'
    }, [])

    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">

            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                    <form onSubmit={handleSignUp} method="POST">
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={({ target }) => setUserName(target.value)} />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)} />

                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}>
                            Sign UP
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account? {'  '}
                        <Link to={ROUTES.LOGIN} className="font-bold">
                            Login
                     </Link>
                    </p>
                </div>


            </div>
        </div>

    )
}