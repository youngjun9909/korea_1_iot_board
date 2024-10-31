import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface BookResponseDto {
  id: number;
  writer: string;
  title: string;
  content: string;
  category: 'NOTICE' | 'FREE' | 'QNA' | 'EVENT'
}

export default function Book() {

  const [results, setResults] = useState<BookResponseDto[]>([]);



  useEffect(() => {
    const fetchBook = async() => {
      try{
        const response = await axios.get('http://localhost:8080/api/v1/books')
        
        if(response) {
          setResults(response.data);
        }
  
      }catch(e){
        console.error("데이터 로딩 실패", e);
      }
    }

    fetchBook();
  },[])

  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  )
}
