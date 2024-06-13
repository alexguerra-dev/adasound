import './globals.css'

export const metadata = {
    title: 'Adasound',
    description: 'Fun and learning',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
