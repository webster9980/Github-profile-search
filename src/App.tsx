import { HeaderSearch } from "./components/HeaderSearch";
import { StarredRepos } from "./components/StarredRepos";
import { Repos } from "./components/UserRepos";
import { ContextProvider } from "./contexts/ContextProvider";
import { globalStyles } from "./styles/global";
function App() {
  globalStyles();
  return ( 
    <ContextProvider>
      <HeaderSearch />
      <Repos />
      <StarredRepos />
    </ContextProvider> 
  )
}

export default App;
