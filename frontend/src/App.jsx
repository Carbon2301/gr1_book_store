import { Outlet } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import React, { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function MainLayout() {
  const [search, setSearch] = useState("");
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
      <Navbar search={search} setSearch={setSearch} />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
        <Outlet context={{ search }} />
      </main>
      <Footer/>
      </AuthProvider>
    </>
  )
}

export default MainLayout
