// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
    setKeyword('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Rechercher par mot-clé..."
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600">Rechercher</button>
    </form>
  );
}

export default SearchForm;
