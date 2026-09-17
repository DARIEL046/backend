import * as bookModel from '../models/models/bookModel.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookModel.fetchAllBooks();
    return books;
};