import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface TestType  {
  id: number;
  text: string;
}

export default function Test() {
  const [datas, setDatas] = useState<TestType[]>([])

  const loadData = async() => {
    const response = await axios.get<{data: TestType[]}>("http://192.168.0.100:8080/api/v1/tests/test");
    const testData = response.data.data;
    setDatas(testData);
  }

  useEffect(() => {
    loadData()
  },[])

  return (
    <>
      <ul>
        {datas.map((data) => (
        <li key={data.id}>
          {data.text}
        </li>
        ))}
      </ul>
    </>
  )
}
