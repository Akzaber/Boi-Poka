import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredReadList } from '../../utility/addToDB';
import Book from '../Book/Book';
import { getStoredWishList } from '../../utility/addToLS';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = 
        allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBooks(readBookList);
    }, [])

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const readWishList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishListBooks(readWishList);
    }, [])

    return (
        <div className='my-20'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <label className="tab">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    Read Books
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            readBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </div>

                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    Wishlist Books
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            wishListBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;