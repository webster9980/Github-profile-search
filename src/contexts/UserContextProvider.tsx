import { createContext, ReactNode, useState } from "react";
  
  export interface UserProps {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
  }
  
  export interface RepositoryProps {
    id: number;
    full_name: string;
    owner: {
      login: string;
      avatar_url: string;
    };
    description: string;
    html_url: string;
  }

  interface UserProviderProps {
    children: ReactNode
  }

  export interface IStarredReposProps {
    starredRepos: Array<{
      id: number;
      full_name: string;
      owner: {
        login: string;
        avatar_url: string;
      };
      description: string;
      html_url: string;
    }>;
  }

export const UserContextProvider = createContext({} as any)

export function ContextProvider({children}: UserProviderProps){

    const [userRepo, setUserRepo] = useState<UserProps[]>([])
    const [starredRepos, setStarredRepos] = useState<IStarredReposProps[]>([])
    return(
        <UserContextProvider.Provider value={{ userRepo, setUserRepo, starredRepos, setStarredRepos}}>
            {children}
        </UserContextProvider.Provider>
    );
}