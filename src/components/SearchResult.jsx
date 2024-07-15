import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchResult.css";
import { useData } from './DataContext';

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();
  const { setDataValue } = useData();
  const handleClick = () => {
     setDataValue([result.title,[result,]]);
     navigate('/newpage');
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      {result.title}
    </div>
  );
};
