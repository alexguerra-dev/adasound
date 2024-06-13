import './globals.css'

export const metadata = {
    title: 'Adasound',
    description: 'Fun and learning',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-500 flex flex-col min-h-screen">
                {children}
            </body>
        </html>
    )
}
