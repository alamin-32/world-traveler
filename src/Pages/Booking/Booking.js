import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import survey from '../../assets/images/survey.jpg'

const Booking = () => {
    const [user] = useAuthState(auth);

    const handleBooking = e => {
        e.preventDefault()
        // const review = e.target.review.value;
        const tourDate = e.target.tourDate.value
        const contact = e.target.contact.value
        const person = e.target.person.value
        const pickUp = e.target.pickUp.value


        const data = {
            name: user.displayName,
            email: user.email,
            tourDate: tourDate,
            contact: contact,
            person: person,
            pickUp: pickUp
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Booking Successful")
                e.target.reset()
            })
    }
    return (
        <div className='mr-10 my-10'>
            <div className="mx-10">
                <h2 className="text-5xl font-bold text-orange-500 text-center ml-6 mb-5">Booking</h2>
                <div>
                    <form onSubmit={handleBooking}>
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
                        <div className="form-control  w-full ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                required
                                type="date"
                                name="tourDate"
                                placeholder=""
                                className="rounded px-4 py-4 input-bg w-full "
                            />
                        </div>
                        <div className="form-control  w-full ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                required
                                type="number"
                                name="person"
                                placeholder="Number of Person"
                                className="rounded px-4 py-4 input-bg w-full "
                            />
                        </div>
                        <div className="form-control  w-full ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                required
                                type="number"
                                name="contact"
                                placeholder="Contact Number"
                                className="rounded px-4 py-4 input-bg w-full "
                            />
                        </div>

                        <div className="form-control w-full font-semibold ">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <textarea
                                className="textarea rounded input-bg h-40 first-letter:"
                                placeholder="Pick Up Address"
                                name="pickUp"
                                required
                            ></textarea>
                        </div>

                        <input className='btn w-40 con-btn  mt-5' value='Book Now' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;