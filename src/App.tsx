import { HeaderSearch } from "./components/HeaderSearch";
import { Repos } from "./components/Repos";
import { ContextProvider } from "./contexts/ContextProvider";
import { globalStyles } from "./styles/global";
function App() {
  globalStyles();
  return ( 
    <ContextProvider>
      <HeaderSearch />
      <Repos />
    </ContextProvider> 
  )
}

export default App;
