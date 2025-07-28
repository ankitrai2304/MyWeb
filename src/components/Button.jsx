import React from "react";

export default function Button({ children, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
            {children}
        </a>
    );
}
