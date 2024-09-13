import React, { useState, useContext } from 'react';


export const ContactContext = React.createContext();

function ComponentA() {
 
  const sharedValue = useContext(ContactContext);
  return <h1>Shared Value: {sharedValue}</h1>;
}

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-slate-400 text-center px-4 my-4 rounded-3xl w-5px '>
      <h1>Contact page</h1>
     
      <ContactContext.Provider value={count}>
        <button className='bg-blue-700' onClick={() => setCount(count + 1)}>Increment Count</button>
       
        <ComponentA />
      </ContactContext.Provider>
    </div>
  );
}

export default Contact;
