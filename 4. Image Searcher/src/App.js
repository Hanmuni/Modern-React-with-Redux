import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, SetImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    SetImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
