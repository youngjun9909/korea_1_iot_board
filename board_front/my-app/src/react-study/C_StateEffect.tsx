import axios from "axios";
import React, { useEffect, useState } from "react";

const btn = {
  width: "70px",
  hight: "30px",
  border: "none",
  borderRadius:"10px",
  backgroundColor: "#03c75a",
  color: "white",
  margin: "10px",
  padding: "10px"
}

/*
  Menu 카테고리 검색
  ! Menu 객체 구조
  - 고유값 id (Long)
  - 메뉴명 name (String)
  - 메뉴 설명 description (String)
  - 메뉴 가격 price (int)
  - 메뉴 이용 가능 여부 isAvailable (boolean)
  - 메뉴 카테고리 category (String)
  - 메뉴 사이즈 size (String)

  ! HTTP 
  - 메서드: GET
  - 경로: http://localhost:4040/api/v1/menus/search/category 
*/

const DOMAIN = "http://localhost:8080";
const MENU_API = "api/v1/menus";

interface GetMenuCategoryResponseDto  {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: string;
  size: string;
}

type Query = "Food" | "Drink" | "Dessert";

export default function C_StateEffect() {
  const [category, setCategory] = useState<string>("");
  const [results, setResults] = useState<GetMenuCategoryResponseDto[]>([]);
  const [query, setQuery] = useState<Query>('Food');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget.value as Query;
    setQuery(buttonValue);
  }

  const fetchMenuData = async(category: string) => {

    if(category.trim()) {
      try{

        const response = await axios.get(
          `${DOMAIN}/${MENU_API}/search/category`,
          {params: {category}}
        );

        const data = response.data.data;

        setResults(data);

      }catch(error) {
        console.error("Error Fetching Data");
      }
    }
  }

  useEffect(() => {
    fetchMenuData(query);
  },[query])

  useEffect(() => {
    fetchMenuData(category);
  },[category]);

  return (
    <>
      <input
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Enter Category"
        required
      />

      <div>
        <button value='Food' onClick={handleButtonClick} style={btn}>Food</button>
        <button value='Drink' onClick={handleButtonClick} style={btn}>Drink</button>
        <button value='Dessert' onClick={handleButtonClick} style={btn}>Desert</button>
      </div>


      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </>
  );
}
