import {useMemo} from 'react'
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material"
import { Palette, createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { useAppSelector } from "./hooks"
import Dashboard from './scenes/dashboard' 
import Layout from './scenes/layout'
import Products from './scenes/products'
import {BrowserRouter , Routes , Route, Navigate } from "react-router-dom"
import Customers from './scenes/customers'
import Transactions from './scenes/transactions'




function App() {

  const mode = useAppSelector((state)=>state.mode.mode)

  const theme = useMemo (()=>createTheme(themeSettings(mode)), [mode])


  return (
    <div className="app">
      <BrowserRouter>
   <ThemeProvider theme= {theme}>
    {/* it resets everything in terms of your css */}
    <CssBaseline />
   <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/transactions" element={<Transactions/>}/>
      </Route>
   </Routes>
   </ThemeProvider>
   </BrowserRouter>
    </div>
  )
}

export default App
