import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar.jsx/NavBar"
import './App.css'

  const App = () => {
    return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {"Saludos ciudadano promedio tengo mercadería muy interesante para ti"}/> 
    </>
  )
}

export default App
