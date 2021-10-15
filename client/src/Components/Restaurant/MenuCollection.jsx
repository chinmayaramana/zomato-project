import React, { useState } from "react";
import ImgsViewer from "react-simple-image-viewer";
const   MenuCollection = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsOpenMenu(false);
  const openViewer = () => setIsOpenMenu(true);
  console.log(props.image)
  return (
    <>
      {isOpenMenu && (
        <ImgsViewer
          src={props?.image[0]}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div
        className="flex flex-col w-32 h-32 md:h-48 md:w-48"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props?.image[0]}
            alt=""
            className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
          />
        </div>
        <div>
          <strong>{props?.menuTitle}</strong>
          <p>{props?.pages} Pages</p>
        </div>
      </div>
    </>
  );
};

export default MenuCollection;
