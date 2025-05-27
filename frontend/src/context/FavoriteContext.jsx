import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    setFavorites((prev) => {
      if (prev.find((item) => item._id === book._id)) return prev;
      return [...prev, book];
    });
  };

  const removeFavorite = (bookId) => {
    setFavorites((prev) => prev.filter((item) => item._id !== bookId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}; 