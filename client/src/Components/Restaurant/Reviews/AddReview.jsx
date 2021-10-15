import React,{useState} from "react";
import ReviewModal from "./ReviewModal";
const AddReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{
      setIsOpen(true)
  }

  return (
    <>
    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl">Rate Your Experience</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="dinning">Dinning</label>
          <input type="radio" name="review" id="dinning" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="delivery">Delivery</label>
          <input type="radio" name="review" id="delivery" />
        </div>
      </div>

      <button onClick={openModal} className="text-zomato_red">Write a Review</button>
    </>
  );
};

export default AddReview;
