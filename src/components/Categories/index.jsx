import categories from '../../mocks/categories.json'
import styled from 'styled-components'

const StyledSection = styled.section`
    background-color: #788199;
`
const StyledTitle = styled.h1`
    padding-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    font-weight: 900;
    color: #000000;
`

const StyledContainer = styled.div`
    padding: 60px 0px 48px 0px;
    gap: 68px;

    display: flex;
    justify-content: center;

    background-color: #44598090;
    border-radius: 16px;
    margin: 20px 20px 0px 20px;
`
const StyledCategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
    }
`
const StyledCategory = styled.img`
    width: 160px;
    height: 160px;

    background-color: lightgray;
    border-radius: 16px 16px 0 0;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`
const StyledCategoryTitle = styled.h2`
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
    font-size: 16px;
    color: white;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`



const Categories = () => {
    return (
        <StyledSection>
            <StyledTitle> Search by Category:</StyledTitle>
            <StyledContainer>
                {categories.map((category, index) => (
                    <StyledCategoryBox key={index}>
                        <StyledCategory src={category.src} />
                        <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
                    </StyledCategoryBox>
                ))}
            </StyledContainer>
        </StyledSection>

    )
}

export default Categories