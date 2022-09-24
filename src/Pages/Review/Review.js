import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Review.css'

const Review = ({ rView }) => {
    const { img, name, review, email } = rView
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='my-10 mx-auto'>
            <div className="avatar ">
                <div className="w-42 ml-20 rounded-full mb-5">
                    <img src={img} />
                    {/* <img src={user.metadata.photoURL} /> */}
                </div>
            </div>

            <div className="card w-96 h-96 mt-1 shadow-xl bg-white ">
                <div className="card-body items-center text-center py-5">
                    <div class="rating mt-3">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 mr-1" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 mr-1" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 mr-1" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 mr-1" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 mr-1" />
                    </div>
                    <p className='review-text'>{review}</p>
                    <h2 className="card-title font-bold">{name}</h2>
                    <h2 className="font-semibold text-lg text-orange-400">Customer</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;