import React, { useState } from 'react'

// function ModifyCount( props){
//     return(
//         <button onClick={props.increasecount} className='py-2 px-4 rounded-lg text-white bg-orange-400'>Increase Count</button>
        
//     )

// }
function ModifyCount({ increasecount }) {
    const [inputValue, setInputValue] = useState(1); // Initialize input value with 1

    const handleChange = (e) => {
        setInputValue(Number(e.target.value)); // Update input value
    };

    return (
        <div className='flex flex-col items-center'>
            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                className='mb-4 py-2 px-4 rounded-lg border border-gray-300'
            />
            <button
                onClick={() => increasecount(inputValue)}
                className='py-2 px-4 rounded-lg text-white bg-orange-400'
            >
                Increase Count
            </button>
        </div>
    );
}
function Service() {
    const [count, setCount] = useState(0);

    const increasecount = (value) => {
        setCount( value); // Increase count by input value
    };

    return (
        <div>
            {/* Features Section */}
            <section id="services" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 text-center rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                            <p className="text-gray-600">Description for feature 1.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 text-center rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                            <p className="text-gray-600">Description for feature 2.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 text-center rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                            <p className="text-gray-600">Description for feature 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <h1 className='text-5xl text-center'>This is the service page</h1>
            <div className='p-5 m-5 rounded-xl bg-indigo-400 text-white text-5xl text-center'>{count}</div>
            <ModifyCount increasecount={increasecount} />
        </div>
    );
}
// function Service(){
//     const [count,setCount] =useState(0)
//     const increasecount = ()=> {
//         setCount(count + 1)
//     }  
//      return (
//         <div>
//         {/* Features Section */}
//         <section id="services" className="py-16">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {/* Feature 1 */}
//                         <div className="bg-white shadow-md p-6 text-center rounded-lg">
//                             <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
//                             <p className="text-gray-600">Description for feature 1.</p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="bg-white shadow-md p-6 text-center rounded-lg">
//                             <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
//                             <p className="text-gray-600">Description for feature 2.</p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="bg-white shadow-md p-6 text-center rounded-lg">
//                             <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
//                             <p className="text-gray-600">Description for feature 3.</p>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//             <h1 className='text-5xl text-center'>this is the service page</h1>
//             <div className='p-5 m-5 rounded-xl bg-indigo-400 text-white text-5xl text-center'>{count}</div>
//             <ModifyCount  increasecount ={increasecount}/>
//         </div>
//   )
// }

export default Service;