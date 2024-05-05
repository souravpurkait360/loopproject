import styled from 'styled-components';


export const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    margin-top: 5rem;
`;

export const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    margin-right: 90px;
    right: 0;
    height: 1px;
    background-color: var(--gray);
    z-index: 1;
`;

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 31px;
    z-index: 5;
`;
export const StepperIconWrapper = styled.div<{active?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${({active}) => active ? 'var(--yellow)' : 'var(--gray-2)'};
    border-radius: 50%;
`;

export const Label = styled.span<{active?: boolean}>`
    margin-top: 16px;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({active}) => active ? 'var(--black)' : 'var(--black-2)'};
`;
