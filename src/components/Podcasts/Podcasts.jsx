import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Podcasts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_PODCASTS' });
  }, []);

    // to format the appending date of the recent podcasts
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const podcasts = useSelector((store) => store.podcasts);

    return (
        <div className="container">
          <center>
            <h2>Podcasts</h2>
          </center>
            {podcasts.map((podcast, i) => (
                <div key={i}>
                <a href="https://open.spotify.com/show/6f9KRju6JxleavXZvKSltz">
                  <img className="podcastLogo" src={podcast.image_source} />
                </a>
                <p>{formatDate(podcast.time_uploaded)}</p>
                <p>{podcast.description}</p>
              </div>
            ))}
        </div>
    );
}