import React from 'react';
import { Toaster } from 'react-hot-toast'
import Navbar from '../Components/Navbar/Navbar'
import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
          <Navbar />
          <Toaster></Toaster>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}
