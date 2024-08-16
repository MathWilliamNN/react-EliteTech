import { TbExchange } from "react-icons/tb";
import { FaPix } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import benefits from "/src/mocks/benefits.json";
import styled from "styled-components";


const StyledSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 10px 10px 10px 40px;

`
const StyledTitle = styled.h1`
    font-size: 40px;
    color: white;
    font-weight:500;
    padding: 8px;
    text-align: center;
`
const StyledBenefitsContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const StyledBox = styled.div`
    display: flex;
    gap: 40px;
    margin: 40px;
    max-width:350px;
    align-items: center;
`
const StyledBenefitsIcon = styled.h2`
    color: #118996;
    scale: 4;
`
const StyledBenefitsText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const StyledBenefitsTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #118996;
`
const StyledBenefitsDesc = styled.h2`
    font-size: 16px;
    color: white;
    font-weight: 400;
`
const icons = [<FaPix />, <TbExchange />, <FaLeaf />];

const Benefits = () => {
    return (
        <StyledSectionContainer>
            <StyledTitle> Our benefits for you!</StyledTitle>
            <StyledBenefitsContainer>
                {benefits.map((benefit) =>
                (
                    <StyledBox key={benefit.id}>
                        <StyledBenefitsIcon> {icons[benefit.id]} </StyledBenefitsIcon>
                        <StyledBenefitsText>
                            <StyledBenefitsTitle> {benefit.title} </StyledBenefitsTitle>
                            <StyledBenefitsDesc> {benefit.description} </StyledBenefitsDesc>
                        </StyledBenefitsText>
                    </StyledBox>

                ))}
            </StyledBenefitsContainer>
        </StyledSectionContainer>
    )


}

export default Benefits