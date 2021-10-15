import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PhotosCollection from "../../Components/Restaurant/PhotosCollection";
import ImgsViewer from "react-simple-image-viewer";
import { getImage } from "../../Redux/Reducer/Images/images.action";
const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore?.RestaurantReducer?.selectedRestaurant?.restaurant
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, []);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsOpenMenu(false);
  const openViewer = () => setIsOpenMenu(true);

  return (
    <>
      {isOpenMenu && (
        <ImgsViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotosCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
