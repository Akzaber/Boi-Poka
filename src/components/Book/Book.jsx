import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, tags} = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 border border-slate-200">
                <div className='p-4'>
                    <figure className='p-8 bg-base-200 rounded'>
                        <img
                            className='rounded w-32 h-40'
                            src={image}
                            alt="Books" />
                    </figure>
                </div>
                <div className="card-body">
                    <div className='flex flex-row gap-6'>
                        <div className="badge badge-soft badge-success">{tags[0]}</div>
                        <div className="badge badge-soft badge-success">{tags[1]}</div>
                    </div>
                    <h2 className='text-2xl font-bold'>{bookName}</h2>
                    <p className='text-slate-600'>By: {author}</p>
                    <div className='border-b-3 border-slate-600 border-dotted my-3'></div>
                    <div className="card-actions justify-between text-slate-700">
                        <span>Fiction</span>
                        <div className='flex justify-evenly items-center'>
                            <span>{rating}</span>
                            <CiStar className='flex justify-center items-center text-lg ml-2'></CiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;