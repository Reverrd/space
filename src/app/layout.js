import './globals.css'
export const metadata = {
  title: 'myFirstNextApp',
  description: 'BuiltByPromise',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
