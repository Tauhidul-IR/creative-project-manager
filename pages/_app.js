import { Toaster } from 'react-hot-toast'

import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <>

<AuthProvider>
<QueryClientProvider client={queryClient}>
<Component {...pageProps} />
     </QueryClientProvider>
       
        {/* <Navbar/> */}
        <Toaster></Toaster>
      </AuthProvider>

</>
  
  )
}
