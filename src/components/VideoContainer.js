import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube_fetch();
  }, []);

  const youtube_fetch = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AddVideoCard info={videos[0]} />} */}
      {videos.map((videos) => (
        <Link to={"/watch?v=" + videos.id}>
          <VideoCard key={videos.id} info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
