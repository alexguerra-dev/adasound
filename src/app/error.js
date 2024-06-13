'use client'

import React from 'react'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-4xl font-bold mb-4">
                    Oops! Something went wrong.
                </h1>
                <p className="text-gray-600">
                    We apologize for the inconvenience. Please try again later.
                </p>
            </div>
        </div>
    )
}

export default ErrorPage
