import { useState, useMemo } from 'react';

const PerformanceOptimization = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return items.filter(item =>
      item.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [searchTerm, items]); // Memoize the filtered items based on searchTerm and items

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceOptimization;
