import { useContext } from "react";
import { UserContextProvider } from "../../contexts/UserContextProvider";
import { Container, DescProfile, H2, ImgProfile, NameProfile, Profile, ContainerInfo, Span, Section } from "./styles";
import { FaBook, FaUserCheck, FaUserFriends } from 'react-icons/fa';

export function Repos(){

    const {userRepo} = useContext(UserContextProvider)
    
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
            <ContainerInfo>
                <Section>
                    <FaUserFriends size={32} />
                    {userRepo.followers}
                    <Span>
                        Followers
                    </Span>
                </Section>
                <Section>
                    <FaUserCheck size={32} />
                    {userRepo.following}
                    <Span>
                        Following
                    </Span>
                </Section>
                <Section>
                    <FaBook size={32} />
                    {userRepo.public_repos}
                    <Span>
                        Repositories
                    </Span>
                </Section>
            </ContainerInfo>
        </Container>
    );
}