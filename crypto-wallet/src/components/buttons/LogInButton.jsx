
import Link from 'next/link'

export default function LogInButton() {
    return (
        <>
            <Link href={`/login`} >
                <button> Log in button</button></Link>
        </>
    )
}