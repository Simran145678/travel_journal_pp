import Card from "./Card"
import Navigation from "./Navigation"
import './App.css';
import './data'
import data from "./data";


function App() {
  const cards = data.map(item =>{
    return (
      <Card title= {item.title}
            location= {item.location}
            googleMapsUrl= {item.googleMapsUrl}
            startDate= {item.startDate}
            endDate= {item.endDate}
            description= {item.description}
            imageUrl= {item.imageUrl}
      />
    )
  })
  return (
    <>
    <Navigation/>
    
    {cards}
    </>
  );
}

export default App;
