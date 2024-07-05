import { styled } from 'styled-components';

const Stack = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    padding: ${props => props.padding || '0em'};
    overFlow: ${props => props.overflow || 'scroll'};
    box-sizing: border-box;
`;

const Container = styled.div`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-right: 2em;
    padding-left: 2em;
    box-sizing: border-box;
`;

const CategoriesItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
`;

export {
    Stack,
    Container,   
    Section,
    CategoriesItem
}

