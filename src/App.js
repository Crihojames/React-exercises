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

export const PriceContext = React.createContext()
export const ItemContext = React.createContext()

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
    <PriceContext.Provider value={"$200"}>
    <ItemContext.Provider value={"Samsung"}>
    <ComponentC />
    </ItemContext.Provider>
    </PriceContext.Provider>
    
    </div>
  );
}

export default App;

//king
