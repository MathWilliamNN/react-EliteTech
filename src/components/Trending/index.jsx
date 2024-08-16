import products from '../../mocks/products.json'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 0px 0px 20px 0px;
    background-color: #788199;
`;

const StyledTitle = styled.h1`
    padding-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    font-weight: 900;
    color: #000000;
`;

const StyledProductContainer = styled.div`
    margin: 20px 20px 0px 20px;
    padding: 60px 0px 48px 0px;
    gap: 68px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 0;

    background-color: #44598090;
    border-radius: 16px;
`;

const StyledProductBox = styled.div`
    max-width: 380px;
    padding: 15px;

    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 8px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`;

const StyledProductPicture = styled.img`
    width: 350px;
    height: 400px;
    background-color: white;
`;

const StyledProductTitle = styled.h2`
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 800;
    color: black;
    border-radius: 0px 0px 16px 16px;
`;

const StyledProductDescription = styled.p`
    padding: 0px 4px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
`;

const StyledProductPrice = styled.h3`
    padding: 8px 4px;

    align-items: center;
    
    font-size: 24px;
    font-weight: 700;
`;

const StyledBuyButton = styled.button`
    width: 120px;
    height: 24px;
    
    background-color: #44598090;
    border-radius: 3px;
    border: solid 2px #445980;
    /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */

    &:hover {
        transform: translateY(-2px);
    }
`;


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
                        <hr style={{ margin: '4px' }}></hr>
                        <StyledProductDescription>
                            {product.description}
                        </StyledProductDescription>
                        <hr style={{ margin: '4px' }}></hr>
                        <StyledProductPrice>
                            {product.price}
                        </StyledProductPrice>
                        <StyledBuyButton> Add to cart </StyledBuyButton>
                    </StyledProductBox>
                ))}
            </StyledProductContainer>
        </StyledSection>

    )
}

export default Trending