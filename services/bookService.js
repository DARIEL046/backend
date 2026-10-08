import * as bookModel from '../models/bookModels.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
};

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}