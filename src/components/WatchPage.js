import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const params = useParams();    //it wont wrok here so that we r going for search params in react-router-dom
  // console.log(params)

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });            //[]
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className=" ">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="அப்படி Farkhunda Malikzada-விற்கு அன்று நடந்தது என்ன ? | Saravanan Decodes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
