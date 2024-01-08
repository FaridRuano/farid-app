import styles from '@public/styles/styles.scss'
import Navbar from '@public/components/Navbar'


export const metadata = {
  title: 'Farid Ruano',
  description: 'Portfolio WebPage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}
