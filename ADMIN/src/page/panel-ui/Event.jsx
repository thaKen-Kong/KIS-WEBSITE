import { AddContent, Item } from "../../component/AddContent";
import { Container, HeaderContainer } from "../../component/Container";
import { HeaderLabel } from "../../component/Label";
import { useModal } from "../../component/Modal";

export function Events() {

    const {shown , setShown} = useModal()


    return(
        <>
            <HeaderContainer>
                <button onClick={()=> {setShown(true)}} className="button-white">ADD</button>
            </HeaderContainer>
            <Container>
                <HeaderLabel text="EVENTS LIST"  className="green"/>
                <AddContent>
                    <Item />
                </AddContent>
            </Container>
        </>
    )
}