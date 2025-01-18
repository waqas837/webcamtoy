import Link from "next/link";

export default function StartButton() {
    return (
        <Link
            href="/webcam-toy"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
            Click to Let's Start
            <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </Link>
    );
}