import { useEffect, useState } from "react";
  // 10 elements in array
  const items = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Strawberry",
    "Papaya",
    "Kiwi",
  ];

function App() {

   const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  useEffect(() => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredItems(result);
  }, [search]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Simple Search Project</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
