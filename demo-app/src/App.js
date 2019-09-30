import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RefDemo from "./components/RefDemo";
import samplComp from "./components/samplComp";
import OriginalComp from "./components/HOCcomp/OriginalComp";
import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import Counter from "./components/RenderProps/Counter";
import ComponentC from "./components/ContextDemo/ComponentC";
import {
  userProvider,
  UserProvider
} from "./components/ContextDemo/UserContext";
import HttpGetDemo from "./components/HTTPComponents/HttpGetDemo";
import MDB_table from "./components/HTTPComponents/MDB_table";
import SampleComp from "./components/SampleComp";
import HTTP_Fetch from './components/HTTPComponents/HTTP_Fetch';

function App() {
  return (
    <div className="App">
      {/* <SampleComp name='Bala' otherName="Maitreya" /> */}
      {/* <MDB_table /> */}
      {/* <HttpGetDemo /> */}
      {/* <RefDemo/>
     <samplComp/>
     <OriginalComp/> */}
      {/* <ClickCounter name={(isLoggedIn)=> isLoggedIn?'Bala':'Boisar ka raja'}/>
     <HoverCounter/> */}
      {/* <Counter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <UserProvider value="Kedar">
        <ComponentC />
      </UserProvider> */}
      <HTTP_Fetch />
    </div>
  );
}

export default App;
