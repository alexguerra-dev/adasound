import Link from 'next/link'

import Navbar from './ui/navbar'
import Footer from './ui/footer'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <main className="flex-grow container mx-auto p-4">
                <nav className="bg-gray-800 text-5xl">
                    <ul>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="resume"
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="legal"
                            >
                                Legal
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white hover:text-red-300
                            p-4"
                                href="resume"
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* <Footer></Footer> */}
            </main>
            <Footer></Footer>
        </>
    )
}
