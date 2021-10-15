import React from "react";

const PhotosCollection = (props) => {
  return (
    <>
      <div
        className="flex flex-col w-32 h-32 md:h-48 md:w-48"
        onClick={props.openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt=""
            className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
          />
        </div>
        
      </div>
    </>
  );
};

export default PhotosCollection;
