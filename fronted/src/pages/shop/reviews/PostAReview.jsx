/*import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi"
import { usePostReviewMutation } from "../../../redux/features/reviews/reviewsApi";

const PostReviewModal = ({ isModalOpen, handleClose }) => {
    const { id } = useParams();
    const {user}=useSelector((state)=>state.auth)
    const [rating, setRating] = useState(0);
    
    const [comment, setComment] = useState('');

    const {refetch}=useFetchProductByIdQuery(id,{skip:!id});
    const { postReview } = usePostReviewMutation();
    const handleRating=(value)=>{
        setRating(value);

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment={
            comment:comment,
            rating:rating,
            userId:user?._id,
            productId:id
        }
        try{
            const response=await postReview(newComment).unwrap();
            alert("comment posted");
            setComment('');
            setRating(0);
            refetch();

        }
        catch(error){
            alert(error.message);
        }
        
    }
  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-40 px-2 py-4 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-medium mb-4">Post A Review</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
              <span
                  onClick={()=>handleRating(star)}
                  className="cursor-pointer text-yellow-500 text-xl">
              {rating >= star ? (
                <i className="ri-star-fill"></i>
              ) : (
                <i className="ri-star-line"></i>
              )}
            </span>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          className="w-full border border-gray-300  rounded-md mb-4"
        ></textarea>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostReviewModal;*/


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { usePostReviewMutation } from "../../../redux/features/reviews/reviewsApi";

const PostReviewModal = ({ isModalOpen, handleClose }) => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
  const [postReview] = usePostReviewMutation();

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   /* if (!comment || rating === 0 || !user?._id || !id) {
      alert("All fields are required");
      return;
    }*/
    const newComment = {
      comment: comment,
      rating: rating,
      userId: user?._id,
      productId: id,
    };
    console.log(newComment); // Check the values of newComment
    try {
      const response = await postReview(newComment).unwrap();
      alert("Comment posted");
      setComment("");
      setRating(0);
      refetch();
      handleClose();
    } catch (error) {
      console.error("Error posting review:", error);
      alert("Error posting review. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-40 px-2 py-4 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-medium mb-4">Post A Review</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              className="cursor-pointer text-yellow-500 text-xl"
            >
              {rating >= star ? (
                <i className="ri-star-fill"></i>
              ) : (
                <i className="ri-star-line"></i>
              )}
            </span>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          className="w-full border border-gray-300 rounded-md mb-4"
        ></textarea>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostReviewModal;