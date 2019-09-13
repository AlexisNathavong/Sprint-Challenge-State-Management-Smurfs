import styled from 'styled-components';

//NewSmurfForm
export const SmurfForm = styled.div`
    background-image: linear-gradient(to top, rgba(227,0,0, 0), rgba(227, 21, 15, 1));

    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 30px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px;
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
    .smurf-form {
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
    img {
        height: 80px;
        object-fit: contain;
        margin-bottom: 8px;
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
export const SmurfCard = styled.div`
    background-image: linear-gradient(to top, rgba(15,0,0, 0), rgba(15, 186, 236, 1));

    box-shadow: 5px 5px 8px;
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