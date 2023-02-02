import React from 'react';
import { Toaster } from 'react-hot-toast'
import Navbar from '../Components/Navbar/Navbar'
import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AuthProvider>
            <Component {...pageProps} />
            <Navbar />
            <Toaster></Toaster>
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>

    </>
  )
}
