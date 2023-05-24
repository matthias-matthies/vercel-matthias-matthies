import './globals.css'
import LayoutHeader from '@/app/LayoutHeader'
import LayoutFooter from '@/app/LayoutFooter'
import React from 'react'

export const metadata = {
    title: 'Matthias Matthies',
    description: 'Website Description',
}

export default function RootLayout(
    {
        children
    }:
    {
        children: React.ReactNode
    }
) {
    return (
        <html lang="de">
            <body className="font-mont">
            <LayoutHeader />
            {children}
            <LayoutFooter />
            </body>
        </html>
    )
}
