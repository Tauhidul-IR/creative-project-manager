import React from 'react';
import { Toaster } from 'react-hot-toast'

import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Components/Layout/Layout';


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  // const [queryClient] = React.useState(() => new QueryClient())
  return (

    <>
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* <Navbar /> */}
          <Toaster></Toaster>
        </AuthProvider>
        {/* </Hydrate> */}
      </QueryClientProvider>

    </>

  )
}
