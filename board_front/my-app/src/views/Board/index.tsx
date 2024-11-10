import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from '../../component/PagiNation';
import { useCookies } from 'react-cookie';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [cookies] = useCookies(['token']);

  const fetchPosts = async (page: number) => {
    // 저장된 토큰 가져오기
    const token = cookies.token;

    try{
      const response = await axios.get(`http://localhost:8080/api/v1/posts?page=${page}&size=5`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const data = response.data.data;
      setPosts(data.content);
      setTotalPages(data.totalPages);

    }catch(e) {
      console.error('Failed to fetch posts data', e);
    } 
  }

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  }

  const handlePreSectionClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextSectionClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      게시판 목록 화면

      <h2>게시판 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <Pagination 
        pageList={Array.from(Array(totalPages).keys())}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handlePreSectionClick={handlePreSectionClick}
        handleNextSectionClick={handleNextSectionClick}
      />
    </div>
  )
}