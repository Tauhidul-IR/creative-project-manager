import React from 'react';
import { Toaster } from 'react-hot-toast'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import AuthProvider from '../Others/AuthProvider/AuthProvider'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Components/Layout/Layout';


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (

    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* <Navbar /> */}
          <Toaster></Toaster>
        </AuthProvider>
      </QueryClientProvider>
    </>

  )
}
