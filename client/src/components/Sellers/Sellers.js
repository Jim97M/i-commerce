import React, {useState} from 'react';
import './Sellers.scss';

const App = () => {
    return(
        <div className='App'>
           <div className='cardContainer'>
                <img alt='Top Section'/>
                <img 
                  className='ProfilePhoto'
                
                  alt='Image'
                />
                <div className='Details'>
                   <h1>Seller</h1>
                   <h2>Sales</h2>
                </div>
                <div className='Social'>
                   <div className='followers'>
                       <h1>Followers</h1>
                       <h3>Followers</h3>
                   </div>
                   <div className='following'>
                      <h1>Following</h1>
                      <h3>Following</h3>
                   </div>
                </div>
           </div>
        </div>
    );
};

export default App;
