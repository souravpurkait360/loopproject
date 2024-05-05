import styled from 'styled-components';

export const EndorsementDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 0;
    }
`;
export const EndorsementDetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 1rem;
    }
`;
export const EndorsementDetailsTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
`
export const EndorsementDetailsTitleIconWrapper = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--lavender);
    border-radius: 50%;
`
export const EndorsementDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--white);
    margin-top: 31px;
    padding: 1rem;
    border-radius: 12px;
    color: var(--black-2);
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;
export const EndorsementDetailsCardRowMajor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    width: 100%;
    font-weight: 300;
`
export const EndorsementDetailsCardLine = styled.div`
    height: 1px;
    background-color: var(--gray);
    margin: 1rem 0;
    width: 100%;
`;
export const EndorsementDetailsCardRowMinor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 300;
    width: 100%;
    @media (max-width: 768px) {
        font-weight: 400;
    }
`;
export const H2 = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
    color: var(--black);
    @media (max-width: 768px) {
        font-weight: 500;
    }
`
export const H3 = styled.span`
    font-weight: 500;
    color: var(--black);
    font-size: 0.875rem;
    @media (max-width: 768px) {
        font-weight: 600;
    }
`
