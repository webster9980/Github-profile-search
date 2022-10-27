import { useContext } from "react";
import { UserContextProvider } from "../../contexts/ContextProvider";
import { Container, DescProfile, H2, ImgProfile, NameProfile, Profile, Span } from "./styles";

export function Repos(){
    const {userRepo, starredRepos} = useContext(UserContextProvider)
    return(
        <Container>
            <Profile>
                <ImgProfile src={userRepo && userRepo.avatar_url} alt="" />
                <DescProfile>
                    <NameProfile>
                        <H2>{userRepo && userRepo.name}</H2>
                        <Span>{userRepo && userRepo.login}</Span>
                    </NameProfile>
                    <Span>{userRepo && userRepo.bio}</Span>
                    <Span>{userRepo && userRepo.html_url}</Span>
                </DescProfile>
            </Profile>
        </Container>
    );
}