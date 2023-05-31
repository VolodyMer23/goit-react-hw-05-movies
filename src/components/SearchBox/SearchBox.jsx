import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SerchBarHeader,
  SerchBar,
  SearchBarBtn,
  SearchBarInput,
  SearchIcon,
} from './SearchBox.styled';

export default function SearchBox({value, onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <SerchBarHeader>
      <SerchBar onSubmit={handleSubmit}>
        <SearchBarBtn type="submit">
          <SearchIcon />
        </SearchBarBtn>

        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          // value={value}
          onChange={handleChange}
        />
      </SerchBar>
    </SerchBarHeader>
  );
}


