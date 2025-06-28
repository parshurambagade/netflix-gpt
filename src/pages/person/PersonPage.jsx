import { useParams } from "react-router-dom";
import usePersonDetails from "../../hooks/usePersonDetails";
import { useSelector } from "react-redux";
import usePersonMovieCredits from "../../hooks/usePersonMovieCredits";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import { IMG_CDN_URL } from "../../utils/constants";

const PersonPage = () => {
  const { personId } = useParams();
  console.log("PersonId: ", personId);

  const person = useSelector((state) => state.person.personDetails);
  const movieCredits = useSelector((state) => state.person.movieCredits);

  usePersonDetails(personId);
  usePersonMovieCredits(personId);

  if (!person) return null;

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="bg-black">
        <div className=" container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <section
              aria-label="Profile picture"
              className="lg:w-1/3 gap-4 md:gap-6 flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start"
            >
              <img
                src={IMG_CDN_URL + "w185" + person?.profile_path}
                srcSet={`
${IMG_CDN_URL}w154${person?.profile_path} 1x,
${IMG_CDN_URL}w342${person?.profile_path} 2x`}
                alt={person?.name}
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mx-auto lg:mx-0">
                {person?.name}
              </h1>
            </section>
            <section aria-label="Person overview" className="lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
              <p className="text-lg mb-6">
                {person?.biography?.slice(0, 300)}...
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex sm:block items-center justify-start gap-4">
                  <h3 className="text-xl font-semibold mb-2">Birthday</h3>
                  <p>{person?.birthday}</p>
                </div>
                <div className="flex sm:block items-center justify-start gap-4">
                  <h3 className="text-xl font-semibold mb-2">Place of Birth</h3>
                  <p>{person?.place_of_birth}</p>
                </div>
                <div className="flex sm:block items-center justify-start gap-4">
                  <h3 className="text-xl font-semibold mb-2">Gender</h3>
                  <p>
                    {person?.gender === 2
                      ? "Male"
                      : person?.gender === 1
                      ? "Female"
                      : "-"}
                  </p>
                </div>
                <div className="flex sm:block items-center justify-start gap-4">
                  <h3 className="text-xl font-semibold mb-2">Also Known As</h3>
                  <p>{person?.also_known_as}</p>
                </div>
              </div>
              <section aria-labelledby="cast-heading" className="mt-12">
                <h2 className="text-2xl font-semibold mb-4" id="cast-heading">
                  Known For
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {movieCredits?.cast
                    ?.filter((movie) => movie?.poster_path)
                    ?.slice(0, 12)
                    ?.map((movie) => (
                      <Link
                        to={"/movie/" + movie?.id}
                        key={movie?.id}
                        className="text-center"
                      >
                        <img
                          src={IMG_CDN_URL + "185" + movie?.poster_path}
                          srcSet={`
                           ${IMG_CDN_URL}w154${movie?.poster_path} 1x,
                              ${IMG_CDN_URL}w342${movie?.poster_path} 2x
                          `}
                          alt={movie?.title}
                          className="w-full rounded-lg shadow-lg mb-2"
                          loading="lazy"
                        />
                        <p className="font-semibold">{movie?.title}</p>
                      </Link>
                    ))}
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonPage;
