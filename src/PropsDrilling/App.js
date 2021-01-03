import React,{useState,useRef} from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer'

  const darkTheme = {
    name: "dark",
    backgroundColor: "#282c34",
    color: "white",
    linkColor: "#61dafb",
    logoBackground: "white",
};

const lightTheme = {
    name: "light",
    backgroundColor: "white",
    color: "#282c34",
    linkColor: "#61dafb",
    logoBackground: "green",
};

const availableThemes= [darkTheme,lightTheme];
function App() {

  const [selectedTheme,setSelectedTheme]= useState(darkTheme)

  const selectTheme= name=>{
    const theme=availableThemes.find(theme=>theme.name===name)
    if(theme)return setSelectedTheme(theme)
  }

  

  return (
    <div className="App" style={{backgroundColor:selectedTheme.backgroundColor,color:selectedTheme.color}}>
      <Header selectedTheme={selectedTheme}  availableThemes={availableThemes.map(theme=>theme.name)} selectTheme={selectTheme}   />
      <Body selectedTheme={selectedTheme}/>
      <Footer selectedTheme={selectedTheme} /> 
      
       
     
    </div>
  );
}

export default App;



