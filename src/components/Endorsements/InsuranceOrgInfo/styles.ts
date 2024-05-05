import styled from 'styled-components';

export const InsuranceOrgInfoWrapper = styled.div`
    display: flex;
    height: 60px;
    @media (max-width: 768px) {
        height: fit-content;
        flex-direction: column;
    }
`;

export const InsuranceOrgInfoLeftSection = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    gap: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const InsuranceOrgInfoImage = styled.img`
    width: auto;
    height: 50px;
    border-radius: 5px;
    @media (max-width: 768px) {
        height: 60px;
    }
`;

export const InsuranceOrgInfoNameDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media (max-width: 768px) {
        gap: 5px;
    }
`;

export const InsuranceOrgTitle = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
`;

export const InsuranceOrgDetails = styled.div`
    font-size: 0.75rem;
    font-weight: 300;
    display: flex;
    gap: 15px;
    align-items: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 5px;
    }
`;

export const InsuranceOrgInfoDot = styled.div`
    height: 5px;
    width: 5px;
    background-color: #EEEEEE;
`;

export const InsuranceOrgInfoRightSection = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        justify-content: flex-start;
    }
`;

export const InsuranceOrgInfoDownloadButton = styled.button`
    border: 1px solid var(--teal);
    color: var(--teal);
    padding: 0px 25px;
    height: 42px;
    border-radius: 12px;
    font-size: 0.75rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    font-size: 0.75rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`;