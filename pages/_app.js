import { Toaster } from 'react-hot-toast'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  if(Component.getLayout){
  return Component.getLayout(<Component {...pageProps}/>)
  }
  return (
    <>
{/* <Navbar></Navbar>

<Footer></Footer>

<> */}

<AuthProvider>
        <Component {...pageProps} />
        {/* <Navbar/> */}
        <Toaster></Toaster>
      </AuthProvider>
</>
  
  )
}
