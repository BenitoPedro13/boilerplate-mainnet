import Header from '@/components/Header'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin']})

export const metadata = {
  title: 'Boilerplate Mainnet',
  description: 'Boilerplate para praticar integraçao entre designer e desenvolvedor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
