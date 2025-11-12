import { Layout } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import '../styles/app.css';

export const metadata = {
  title: 'Fabric'
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}