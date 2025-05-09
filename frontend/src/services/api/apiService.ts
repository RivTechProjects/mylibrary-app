import { API_URL } from "@config";

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/api/get_books`);
  if (!response.ok) {
    throw new Error("Failed to fetch library");
  }
  return response.json();
};

export const searchBooks = async (query: string) => {
  const response = await fetch(`${API_URL}/search_books?query=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};

export const addBook = async (book: any, status: string) => {
  const response = await fetch(`${API_URL}/api/add_book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...book, status }),
  });
  if (!response.ok) {
    throw new Error("Failed to add book to library");
  }
  return response.json();
};

export const updateBookStatus = async (title: string, status: string) => {
  const response = await fetch(`${API_URL}/api/update_book_status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update book status");
  }

  return response.json();
};

export const getQuoteOfTheDay = async () => {
  const response = await fetch(`${API_URL}/api/quote_of_the_day`);
  if (!response.ok) {
    throw new Error("Failed to fetch the quote of the day");
  }
  return response.json();
};