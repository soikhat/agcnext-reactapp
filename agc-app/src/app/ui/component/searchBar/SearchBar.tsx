'use client';
import { useState } from "react";
import type { rechercheType } from "@/types/recherche-type";
import Button from "../../design-system/Button/Button";
import { Search } from "lucide-react";

export default function SearchBar({placeholder, title, buttonText, onSearch}: rechercheType) {
    const [query, setQuery] = useState("");
    
    const handleSearch = () => {
        if(onSearch) {
            onSearch(query);
        }
    };
    return (
      <>
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div className="flex flex-grow-1 border-gray-300 bg-white rounded overflow-hidden max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-grow p-2"
          />
          <Button
            variant="ico"
            icon={{ icon: Search }}
            onClick={handleSearch}
            className="bg-primary text-primary px-4 rounded hover:bg-primary-dark transition"
          >
            {buttonText}
          </Button>
        </div>
      </>
    );
}