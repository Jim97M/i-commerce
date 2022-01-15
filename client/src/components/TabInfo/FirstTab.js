import React, {useContext} from  'react';
import AppContext from  './Context';
import './MultiTab.css';

const FirstTab = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if(updateContext.firstName == null){
            console.log('Please Enter Your First Name');
        }else if(updateContext.lastName){
            console.log('Please Enter Your Last Name');
        }else if(updateContext.id || updateContext.id !== 10){
            console.log('Please Enter Correct Identification Number');
        }else if(updateContext.userPhone !== null || updateContext.userPhone.length !== 10){
            console.log('Please Enter Correct Phone Number');
        }else if(updateContext.image !== null){
            console.log('Please Upload Image');
        }else if(updateContext.age !== null updateContext.age.length > 3){
            console.log('Please Enter Correct Age');
        }else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
           <p>Please Enter Below Details</p>
           <form>
               <input className="formInput" type="text" onChange={(e) => updateContext.setFirstName(e.target.value)} required/>
               <input className="formInput" type="text" onChange={(e) => updateContext.setLastName(e.target.value)} required/>
               <input className="formInput" type="number" onChange={(e) => updateContext.setId(e.target.value)} required/>
               <input className="formInput" type="number" onChange={(e) => updateContext.setPhoneNumber(e.target.value)} required/>
               <input className="formInput" type="file" onChange={(e) => updateContext.setImage(e.target.value)} required/>
               <input className="formInput" type="number" onChange={(e) => updateContext.setNumber(e.target.value)} required/>
           </form>
        </div>
    )
}

export default FirstTab;