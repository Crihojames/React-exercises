import React from 'react';
import logo from './logo.svg';
import Count from './components/UseStatePractice.js/Counter' 
import Counter2 from './components/UseStatePractice.js/Counter2';
import Counter3 from './components/UseStatePractice.js/Counter3';
import HookStateArray from './components/UseStatePractice.js/HookStateArray';
import EffectExample1 from './components/UseEffectPractice/EffectExample1';
import EffectExample2 from './components/UseEffectPractice/EffectExample2';
import EffectExample3 from './components/UseEffectPractice/EffectExample3';
import MouseContainer from './components/UseEffectPractice/MouseContainer';
import FetchMultiplePosts from './components/dataFetching/FetchMultiplePosts';
import ComponentC from './Implement context/ComponentC';
import MyCounter1 from './components/useReducerPractice/MyCounter1';
import MyCounter2 from './components/useReducerPractice/MyCounter2';
import MyCounter3 from './components/useReducerPractice/MyCounter3';
import MyMemoCounter from './components/useMemoPratice/MyMemoCounter';

// //Implement context
// export const PriceContext = React.createContext()
// export const ItemContext = React.createContext()



import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Count/>
    <Counter2/>  */}
    {/* <Counter3 /> */}
    {/* <HookStateArray /> */}
    {/* <EffectExample1 /> */}
    {/* <EffectExample2/> */}
    {/* <EffectExample3 /> */}
    {/* <MouseContainer/> */}
    {/* <FetchMultiplePosts/> */}

    {/* //Implement context
    <PriceContext.Provider value={"$200"}>
    <ItemContext.Provider value={"Samsung"}>
    <ComponentC />
    </ItemContext.Provider>
    </PriceContext.Provider> */}
    {/* <MyCounter1 /> */}
    {/* <MyCounter2 /> */}
    {/* <MyCounter3/> */}
    <MyMemoCounter />

    
    </div>
  );
}   

export default App;

//king
