import * as bookModel from '../models/bookModels.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
};

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

//Update
export const updatebook = async(book) =>{
    const updatedBook = await bookModel.update(book);
    return updatedBook;
}

//Delete
export const deleteBook = async (id) => {
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
 }