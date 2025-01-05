import { useState } from 'react';

const BugFixedCode = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase()) // Fixed 'toLowercase' typo
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch} // Changed onInput to onChange
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li> // Using item as a unique key
        ))}
      </ul>
    </div>
  );
};

export default BugFixedCode;
