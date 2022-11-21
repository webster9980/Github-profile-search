import api from "../../services/api";
import {useContext, useState} from 'react'
import { ButtonHeader, DivHeaderContainer, HeaderContainer, InputContainer, TituloH1 } from "./styles";
import { RepositoryProps, UserContextProvider, UserProps } from "../../contexts/UserContextProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

export function HeaderSearch(){
    const [userSearched, setUserSearched] = useState('')

    const {setUserRepo, setStarredRepos } = useContext(UserContextProvider)

    const { 
      handleSubmit,
      formState: { isSubmitting } 
    } = useForm()

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

    async function handleSubmitSearch() {
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
            <TituloH1>Find Profiles on Github</TituloH1>
            <form onSubmit={handleSubmit(handleSubmitSearch)}>
              <DivHeaderContainer>
                  <InputContainer 
                    type='text' 
                    placeholder="webster9980" 
                    name='user' 
                    onChange={e => setUserSearched(e.target.value)}
                    required
                  />
                  <ButtonHeader type='submit' disabled={isSubmitting}>Search</ButtonHeader>
                  <ToastContainer />
              </DivHeaderContainer>
            </form>
        </HeaderContainer>
    );
}