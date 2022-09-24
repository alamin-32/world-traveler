import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import survey from '../../assets/images/survey.jpg'



const MyReview = () => {
    const [user] = useAuthState(auth);

    const handleReview = e => {
        e.preventDefault()
        const review = e.target.review.value;
        const data = {
            name: user.displayName,
            email: user.email,
            review: review
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Review Successful")
                e.target.reset()
            })
    }


    return (

        <div className='mr-10 my-10'>
            <div className="mx-10 mt-5">
                <h2 className="text-5xl font-bold text-orange-500 text-center ml-14">Your Review</h2>
                <div className="grid grid-cols-2">
                    <div>
                        <img className='w-full h-full' src={survey} alt="" />
                    </div>
                    <form className='p-10' onSubmit={handleReview}>
                        <div className="form-control font-bold w-full ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="rounded px-4 py-4 input-bg font-bold font-semibold w-full "
                                value={user?.displayName}
                                disabled
                            />
                        </div>
                        <div className="form-control font-bold w-full ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded px-4 py-4 input-bg font-bold font-semibold w-full "
                                value={user?.email}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full font-bold ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <textarea
                                className="textarea rounded input-bg h-40 first-letter:"
                                placeholder="Type here"
                                name="review"
                            ></textarea>
                        </div>

                        <input className='btn w-40 con-btn  mt-5' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default MyReview;