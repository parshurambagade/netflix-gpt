import useTrailer from "../hooks/useTrailer";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailer = useTrailer(movieId);

  if (!trailer) return null;
  return (
    <div
      aria-hidden
      className=" w-full lg:min-h-[calc(100vh-64px)] max-h-[80vh] overflow-hidden"
    >
      <div className=" bg-gradient-to-b from-transparent to-black z-10"></div>
      <iframe
        tabIndex={-1}
        src={`https://www.youtube.com/embed/${trailer.key}?si=Or7kDmuG1TMinh6H&mute=1&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1&rel=0`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full aspect-video object-cover z-0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
