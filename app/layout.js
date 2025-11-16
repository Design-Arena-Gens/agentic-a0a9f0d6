export const metadata = {
  title: 'Amruthsai Studio - Creative Production Studio',
  description: 'Welcome to Amruthsai Studio - Your creative production partner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
