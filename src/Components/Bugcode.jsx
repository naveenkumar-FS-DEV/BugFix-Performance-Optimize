import { useState } from 'react';

const Bugcode = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm = event.target.value; // Bug: Incorrect usage of state setter
  };

  const filteredItems = items.filter(item => {
    return item.toLowercase().includes(searchTerm); // Bug: 'toLowercase' should be 'toLowerCase'
  });

  return (
    <div>
      <input type="text" onInput={handleSearch} placeholder="Search items" /> {/* Bug: Should use onChange */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li> // Bug: Using index as a key is not ideal for dynamic lists
        ))}
      </ul>
    </div>
  );
};

export default Bugcode;
