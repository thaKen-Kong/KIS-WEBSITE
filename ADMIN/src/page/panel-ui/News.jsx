import { AddContent, Item } from "../../component/AddContent";
import { Container, HeaderContainer } from "../../component/Container";
import { HeaderLabel } from "../../component/Label";

export function News() {
    return(
        <>  
            <HeaderContainer />
            <Container>
                <HeaderLabel text="NEWS LIST" className="green"/>
                <AddContent>
                </AddContent>
            </Container>
        </>
    )
}