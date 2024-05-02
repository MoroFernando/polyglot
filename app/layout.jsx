import '@/styles/globals.css';
import Nav from '@/components/Nav.jsx';

export const metadata = {
  title: 'Polyglot | Tradutor Inteligente',
  description: 'Tradza textos de forma inteligente!',
  icons: {
    icon: '/icons/Favicon.ico'
  }
}

const layout = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body className='flex flex-col min-h-screen bg-radial-gradient-light' suppressHydrationWarning={true}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default layout