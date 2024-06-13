import React from 'react'
import Link from 'next/link'

const ProjectsPage = () => {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <Link href="/projects/november">November</Link>
            <Link href="/projects/synth">Synth</Link>
        </div>
    )
}

export default ProjectsPage
