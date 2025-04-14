import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList } from '../../utility/addToDB';
import { addToStoredWishList } from '../../utility/addToLS';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, review, image, bookName } = book;
    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }
    const handleAddToWishList = (id) => {
        addToStoredWishList(id)
    }
    return (
        <div className='my-24 flex justify-center items-center'>
            <img className='mr-6 w-1/2 bg-gray-200 p-6 rounded' src={image} alt="" />
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p>{review}</p>
                <div>
                    <button onClick={() => handleMarkAsRead(currentBookId)} className="btn btn-outline mr-6">Mark as Read</button>
                    <button onClick={() => handleAddToWishList(currentBookId)} className="btn btn-outline btn-primary">Add to WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;