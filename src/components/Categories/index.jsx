import categories from '../../mocks/categories.json'
import styled from 'styled-components'

const StyledSection = styled.section`
    background-color: #788199;
`

const StyledConatainer = styled.div`
    display:flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 0px 48px 0px;
`

const StyledCategory = styled.img`
    background-color: lightgray;
    height: 160px;
    width: 160px;
    border-radius: 16px 16px 0 0;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
    

`

const StyledCategoryBox = styled.div`
    display:flex;
    flex-direction:column;
    cursor: pointer;
    &:hover {
        transform: translateY(-10px);
    }
`

const StyledCategoryTitle = styled.h2`
    height: 32px;
    align-items:center;
    background-color: black;
    font-size: 16px;
    color: white;
    display:flex;
    justify-content:center;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`

const StyledTitle = styled.h1`
    color: #000000;
    padding-top: 48px;
    display:flex;
    justify-content: center;
    font-size: 40px;
    align-items:center;
    font-weight: 900;
`


const Categories = () => {
    return (
        <StyledSection>
            <StyledTitle> Search by Category:</StyledTitle>
            <StyledConatainer>
                {categories.map((category, index) => (
                    <StyledCategoryBox key={index}>
                        <StyledCategory src={category.src} />
                        <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
                    </StyledCategoryBox>
                ))}
            </StyledConatainer>
        </StyledSection>

    )
}

export default Categories