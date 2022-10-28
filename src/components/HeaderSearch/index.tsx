import api from "../../services/api";
import {useContext, useState} from 'react'
import { ButtonHeader, DivHeaderContainer, HeaderContainer, InputContainer } from "./styles";
import { RepositoryProps, UserContextProvider, UserProps } from "../../contexts/ContextProvider";
import { FaUserAlt } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function HeaderSearch(){
    const showToastMessageEmpty = () => {
      toast.warning('Campo vazio', {
          position: toast.POSITION.TOP_RIGHT
      });
    };
    const showToastMessageSucess = () => {
      toast.success('Usuario encontrado', {
          position: toast.POSITION.TOP_RIGHT
      });
    };
    const showToastMessageNotfound = () => {
      toast.warning('Usuario não encontrado', {
          position: toast.POSITION.TOP_RIGHT
      });
    };
    const [userSearched, setUserSearched] = useState('')

    const {setUserRepo, setStarredRepos } = useContext(UserContextProvider)

    async function handleSubmit() {
      if(!userSearched){
        console.log('esta vazio')
      }else{
        try{
          const userFind = await api.get<UserProps>(`/users/${userSearched}`);
          const starred = await api.get<RepositoryProps[]>(
            `/users/${userSearched}/starred`,
          );
          setUserRepo(userFind.data)
          setStarredRepos(starred.data)
          console.log(userFind.data)
          console.log(starred.data)
          showToastMessageSucess()
        }catch(err){
          showToastMessageNotfound()
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
                />
                <ButtonHeader onClick={userSearched === '' ? showToastMessageEmpty : handleSubmit}>Search</ButtonHeader>
                <ToastContainer />
            </DivHeaderContainer>
        </HeaderContainer>
    );
}