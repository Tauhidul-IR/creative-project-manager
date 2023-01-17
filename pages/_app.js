import Navbar from '../Components/Navbar/Navbar'
import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar/> */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
