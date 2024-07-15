import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./SearchBar.css";
import { useNavigate } from 'react-router-dom';
import { Cards } from "../cards";
import Fuse from 'fuse.js';
import { items } from './data';
import { useData } from './DataContext';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const { setDataValue } = useData();
  

  const fuse = new Fuse(items, {
    includeScore: true,
    threshold: 0.3, // Adjust the threshold for sensitivity
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInput(value);

    if (value.trim() !== '') {
      const results = fuse.search(value.split(' ').pop());
      setSuggestions(results.map(result => result.item));
      fetchData(value);
    } else {
      setSuggestions([]);
      setResults([]);
    }
  };

  const fetchData = (value) => {
    const results = Cards.filter((card) => {
        const searchWords = value.toLowerCase().split(' ').filter(word => word.trim() !== '');
      if (value.length > 0) {
         return searchWords.some(word =>
      card.title.toLowerCase().includes(word) ||
      card.content.toLowerCase().includes(word)
    );
      }
      return null;
    });
    setResults(results);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setDataValue([input, input.trim() !== '' ? Cards.filter(card =>
        input
          .toLowerCase()
          .split(' ')
          .filter(word => word.trim() !== '')
          .some(word =>
            card.title.toLowerCase().includes(word) ||
            card.content.toLowerCase().includes(word)
          )
      ) : []]);
      navigate('/newpage'); // navigate to /newpage
    
    }
    else if (event.key === 'Tab') {
            event.preventDefault();
            if (suggestions.length > 0) {
                const str=input.split(' ').slice(0,-1).join(' ')+' '+suggestions[0];
                setInput(str);
                setSuggestions([]);
                fetchData(str);
            }
        }
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        style={{ fontFamily: "Inter", fontWeight: "light", fontSize: "15px" }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <GoSearch id="search-icon" />
    </div>
  );
};
