import styled from 'styled-components';

//NewSmurfForm
export const Form = styled.div`
    background-color: #0FBAEC;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 30px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    align-items: center;
    height: 300px;
    display: flex;
    justify-content: center;
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        label {
            
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
`;


export const AddBtn = styled.button`
    background-color: #E3150F;
    color: #FFFFFF;
    font-size: 14px;
    padding: 5px 5px;
    width: 70px;
    margin: 0 auto;
    margin-top: 5px;
    cursor: pointer;
   
`;

//App
export const Title = styled.h1`
    margin: 0 auto;
    font-size: 18px;
    text-align: center;
    padding-top: 15px;
`;

//Smurf
export const Card = styled.div`
    background-color: #0FBAEC;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 50%;
`;

export const Name = styled.h1`
    margin: 0 auto;
    color: #FFFFFF;
    padding-bottom: 20px;
    font-size: 20px;
`;

export const Info = styled.p`
    margin: 0 auto;
    font-size: 16px;
    
`;