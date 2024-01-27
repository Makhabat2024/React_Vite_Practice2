import { useEffect } from "react";
import { useState } from "react";
import Input from "./ui/inputs/Input";
import Button from "./ui/buttons/Button";
import CardItem from "./cardItem/CardItem";


const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("10");
  console.log(input);

  const getData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const responseData = await response.json();
      console.log(responseData.results);

      setData(responseData.results);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData = () => {
    const newData = [];
    for (let i = 0; i < input; i++) {
      console.log("filtered is work");
      newData.push(data[i]);
    }
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, [input]);

  return (
    <div>
      <div>
        <Input setInput={setInput} />
        <Button onClick={filteredData} />
      </div>

      <div  className="cards" >
        {data.map((item) => (
          <div key={item.id}>
            <CardItem
              name={item.name}
              status={item.status}
              image={item.image}
            />
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default App;
