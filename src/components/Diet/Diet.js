import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Input, SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../../styles/up.css";

const Diet = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("meal");
  const [reload, setReload] = useState(false);
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }
  function handleClick(e) {
    setReload(!reload);
  }
  useEffect(() => {
    fetch(
      `API`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(recipes);
      })
      .catch((error) => console.error(error));
  }, [reload]);

  const GetDiet = () => {
    return (
      <SimpleGrid ml="3" mt="5" columns={4} spacing={10}>
        {recipes.map((element, index) => {
          return (
            <Card
              key={index}
              image={element.recipe.images.SMALL.url}
              label={element.recipe.label}
              mealType={element.recipe.mealType}
              cuisineType={element.recipe.cuisineType}
              calories={element.recipe.calories}
            />
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <>
      <h1 style={{ fontFamily: 'Georgia, serif' }}>
        <center>DIET PLANNER</center>
      </h1>
      
      <div className="cus-inp" onChange={handleChange}>
        <input placeholder="Enter any ingredient" />

        <button className="flex-all" onClick={handleClick}>
          <SearchIcon />
        </button>
      </div>
      <GetDiet />

      <div className="cus-inp" onChange={handleChange}>
        
        <iframe
        src="http://localhost:8501"
        style={{ width: "100vw", height: "100vh" }}
      />
      </div>
      
    </>

    
  );
};

export default Diet;
