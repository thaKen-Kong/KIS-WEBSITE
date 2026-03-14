import { AddContent, Item } from "../../component/AddContent";
import { Container, HeaderContainer } from "../../component/Container";
import { HeaderLabel } from "../../component/Label";
import { useModal } from "../../component/Modal";

export function News() {
    const {shown, setShown} = useModal()

    return(
        <>  
            <HeaderContainer>
                <button onClick={()=> {setShown(true)}} className="button-white">ADD</button>
            </HeaderContainer>
            <Container>
                <HeaderLabel text="NEWS LIST" className="green"/>
                <AddContent>
                </AddContent>
            </Container>
        </>
    )
}