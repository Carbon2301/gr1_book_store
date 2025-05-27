import React, { useState } from 'react'
import { Banner } from './Banner'
import { TopSellers } from './TopSellers'
import Recommended from './Recommended'
import News from './News'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import { BookCard } from '../books/BookCard';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
  const { search = "" } = useOutletContext() || {};
  const { data: books = [], isLoading } = useFetchAllBooksQuery(search);
  const isSearching = search.trim() !== '';

  // Pagination state
  const [page, setPage] = useState(1);
  const booksPerPage = 6;
  const totalPages = Math.ceil(books.length / booksPerPage);
  const paginatedBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

  // Reset page to 1 when search changes
  React.useEffect(() => {
    setPage(1);
  }, [search]);

  if (isSearching) {
    return (
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full text-center text-lg">Loading...</div>
          ) : paginatedBooks.length === 0 ? (
            <div className="col-span-full text-center text-lg">No books found.</div>
          ) : (
            paginatedBooks.map((book) => <BookCard key={book._id} book={book} />)
          )}
        </div>
        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              className="px-3 py-1 rounded border bg-white hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded border bg-white hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Banner/>
      <TopSellers/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home;