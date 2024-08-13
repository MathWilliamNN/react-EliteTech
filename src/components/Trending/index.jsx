import products from '../../mocks/products.json'
import styled from 'styled-components'

const StyledSection = styled.section`
    background-color: #788199;
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

const StyledProductContainer = styled.div`
    margin: 72px 20px;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow:0;
    gap: 60px ;
    padding: 60px 0px 48px 0px;
`

const StyledProductBox = styled.div`
background-color: white;
    display:flex;
    flex-direction:column;
    max-width: 380px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`

const StyledProductPicture = styled.img`
    background-color: white;
    height: 422px;
    width: 350px;
`

const StyledProductTitle = styled.h2`
    height: 48px;
    font-size: 24px;
    font-weight: 800;
    color: black;
    align-items:center;
    display:flex;
    justify-content:center;
    border-radius: 0px 0px 16px 16px;
`

const StyledProductDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    align-items:center;
    display:flex;
    justify-content:center;
    padding: 0px 4px;
    /* text-align: justify; */
`

const StyledProductPrice = styled.h3`
    font-size: 24px;
    font-weight: 700;
    align-items:center;
    padding: 8px;
`

const StyledBuyButton = styled.button`
    background-color: cyan;
    border-radius: 8px;
`

const Trending = () => {
    return (
        <StyledSection>
            <StyledTitle> Trending </StyledTitle>
            <StyledProductContainer>
                {products.map((product, index) => (
                    <StyledProductBox key={index}>
                        <StyledProductPicture src={product.src} />
                        <StyledProductTitle>
                            {product.title}
                        </StyledProductTitle>
                        <hr></hr>
                        <StyledProductDescription>
                            {product.description}
                        </StyledProductDescription>
                        <hr></hr>
                        <StyledProductPrice>
                            {product.price}
                        </StyledProductPrice>
                        <StyledBuyButton> Botao </StyledBuyButton>
                    </StyledProductBox>
                ))}
            </StyledProductContainer>
        </StyledSection>

    )
}

export default Trending