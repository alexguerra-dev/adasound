'use client'

import React from 'react'
import { useRouter } from 'next/router'

const Loading = () => {
    const router = useRouter()

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/') // Replace '/' with your desired route
        }, 3000) // Replace 3000 with the desired loading time in milliseconds

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900">
                We are loading...
            </div>
        </div>
    )
}

export default Loading
