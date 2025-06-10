import { Outlet } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import React, { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function MainLayout() {
  const [search, setSearch] = useState("");
  return (
    <>
      <ScrollToTop />
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
            <Navbar search={search} setSearch={setSearch} />
            <main className='min-h-screen max-w-screen-2xl mx-auto px-4 pt-24 pb-6 font-primary text-gray-900 dark:text-dark-text'>
              <Outlet context={{ search }} />
            </main>
            <Footer/>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
