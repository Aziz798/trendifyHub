import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import LogReg from './pages/LogReg';
import { HomePage } from './pages/HomePage';
import Footer from './components/Footer';

const App = () => {
  // const [products,setProducts]=useState(null);
  // useEffect(()=>{
  //   const getProducts=async()=>{
  //     const ref = collection(db,"products")
  //     const data =await getDocs(ref);
  //     console.log(data.docs.map(doc=>({...doc.data(),id:doc.id})));
  //   }
  //   getProducts()
  // },[])
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   setIsDarkMode(darkModeQuery.matches);

  //   const handleDarkModeChange = (event) => {
  //     setIsDarkMode(event.matches);
  //   };

  //   darkModeQuery.addListener(handleDarkModeChange);

  //   return () => {
  //     darkModeQuery.removeListener(handleDarkModeChange);
  //   };
  // }, []);

  // return (
  //   <div>
  //     <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
  //     {/* Your website content */}
  //   </div>
  // );


  const [theme, setTheme] = useState(true);
  return (
    <div data-theme={theme ? "light" : "dark"}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login/registration' element={<LogReg />} />
      </Routes>
      <Footer />

    </div>
  )
};

export default App;
