import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { usePostReviewMutation } from "../../../redux/features/reviews/reviewsApi";

const PostReviewModal = ({ isModalOpen, handleClose }) => {
  const { id } = useParams();
  // Add this console.log to debug the auth state
  const auth = useSelector((state) => state.auth);
  console.log("Complete auth state:", auth);

  // Then modify the user selector
  const user = useSelector((state) => state.auth?.user);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("User object:", user); // Debugging: Check the user object
  }, [user]);

  const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
  const [postReview] = usePostReviewMutation();

  const handleRating = (value) => {
    setRating(value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
    
  if (!user) {
      alert("Please log in to post a review");
      return;
  }

  if (!comment || rating === 0) {
      alert("Please provide both rating and comment");
      return;
  }

  const newComment = {
      comment,
      rating,
      userId: user._id,
      productId: id,
  };

  try {
      await postReview(newComment).unwrap();
      alert("Review posted successfully");
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
