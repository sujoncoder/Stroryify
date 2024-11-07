import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
                Sorry, the page you are looking for could not be found.
            </p>
            <Link className="text-blue-500 hover:underline" href="/">
                <span>Return Home</span>
            </Link>
        </div>
    );
}