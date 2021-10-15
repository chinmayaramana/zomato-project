import React from "react";
import classNames from "classnames";
import { useParams,useLocation, Link } from "react-router-dom";

const Tab = (props) => {
  const {id} = useParams();
  return (
    <>
      <Link to={`/restaurant/${id}/${props.route}`}>
        <div className="absolute w-full h-2" />
        <div
          className={classNames("text-gray-600 font-base ", {
            "text-zomato_red    font-semibold": props.isActive,
          })}
        >
          <h3 className="text-lg md:text-2xl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};
const TabsContainer = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];

  return (
    <>
      <div className="flex relative items-center gap-7 md:gap-20   border-b-2 pb-4">
        {tabs.map((tab) => (
          <Tab {...tab} key={`132${tab.route}`} />
        ))}
      </div>
    </>
  );
};

export default TabsContainer;
