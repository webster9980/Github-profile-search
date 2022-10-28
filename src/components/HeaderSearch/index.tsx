import api from "../../services/api";
import {useContext, useState} from 'react'
import { ButtonHeader, DivHeaderContainer, HeaderContainer, InputContainer } from "./styles";
import { RepositoryProps, UserContextProvider, UserProps } from "../../contexts/ContextProvider";
import { FaUserAlt } from "react-icons/fa";



export function HeaderSearch(){
    const [userSearched, setUserSearched] = useState('')

    const {setUserRepo, setStarredRepos } = useContext(UserContextProvider)

    async function handleSubmit() {
      if(!userSearched){
        console.log('não funcionou')
      }else{
        try{
          const userFind = await api.get<UserProps>(`/users/${userSearched}`);
          const starred = await api.get<RepositoryProps[]>(
            `/users/${userSearched}/starred`,
          );
          setUserRepo(userFind.data)
          setStarredRepos(starred.data)
        }catch(err){
          console.log(err)
        }
      }
    }
    return(
        <HeaderContainer>
            <h1>Find Profiles on Github</h1>
            <DivHeaderContainer>
                <InputContainer 
                  type='text' 
                  placeholder="webster9980" 
                  name='user' 
                  onChange={e => setUserSearched(e.target.value)}
                  required
                />
                <ButtonHeader onClick={handleSubmit}>Search</ButtonHeader>
            </DivHeaderContainer>
        </HeaderContainer>
    );
}