import { CardRepo, CardStar, Container, H1, Header, Img, TitleAndDesc } from "./styles";
import {useContext} from 'react'
import { UserContextProvider } from "../../contexts/ContextProvider";
import { FaStar } from "react-icons/fa";
export function StarredRepos(){
    const { starredRepos } = useContext(UserContextProvider)
    return(
        <Container>
            <H1><FaStar />Starred repositories</H1>
            {starredRepos.map(item => {
                return (
                    <CardRepo key={item.id}>
                            <div>
                                <Header>
                                    <CardStar>
                                        <span>Star</span>
                                        <FaStar />
                                    </CardStar>
                                </Header>
                                <TitleAndDesc>
                                    <Img src={item.owner.avatar_url} />
                                    <div>
                                        <a href={item.html_url} target='_blank'>
                                            <h2>{item.full_name}</h2>
                                        </a>
                                        <span>{item.description}</span>
                                    </div>
                                </TitleAndDesc>
                            </div>
                    </CardRepo>
                )
            })}
        </Container>
    );
}