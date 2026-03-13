import { AddContent, Item } from "../../component/AddContent";
import { Container, HeaderContainer } from "../../component/Container";
import { HeaderLabel } from "../../component/Label";

export function Events() {
    return(
        <>
            <HeaderContainer />
            <Container>
                <HeaderLabel text="EVENTS LIST"  className="green"/>
                <AddContent>
                    <Item />
                </AddContent>
            </Container>
        </>
    )
}