"use client";
import { useState } from "react";
import type { rechercheType } from "@/types/recherche-type";
import Button from "../../design-system/Button/Button";
import { Search } from "lucide-react";

export default function SearchBar({
  placeholder,
  title,
  buttonText,
  onSearch,
}: rechercheType) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  // Permettre la recherche avec la touche Entrée
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div role="search" aria-label="Recherche d'articles">
      {title && (
        <h2 id="search-title" className="text-2xl font-bold mb-4 text-center">
          {title}
        </h2>
      )}
      <div className="flex flex-grow-1 border-gray-300 bg-white rounded overflow-hidden max-w-md mx-auto">
        <label htmlFor="search-input" className="sr-only">
          {placeholder || "Rechercher"}
        </label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow p-2"
          aria-labelledby={title ? "search-title" : undefined}
          aria-describedby="search-description"
          autoComplete="off"
        />
        <span id="search-description" className="sr-only">
          Appuyez sur Entrée ou cliquez sur le bouton pour lancer la recherche
        </span>
        <Button
          variant="ico"
          icon={{ icon: Search }}
          iconTheme="red"
          size="large"
          onClick={handleSearch}
          className="bg-transparent text-primary hover:bg-primary-50 transition"
          aria-label={buttonText || "Lancer la recherche"}
        >
          <span className="sr-only">{buttonText}</span>
        </Button>
      </div>
    </div>
  );
}
