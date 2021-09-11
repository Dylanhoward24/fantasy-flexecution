import { useSelector } from "react-redux";

export default function Podcasts() {

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
                <img className="podcastLogo" src={podcast.image_source} />
                <p>{formatDate(podcast.time_uploaded)}</p>
                <p>{podcast.description}</p>
              </div>
            ))}
        </div>
    );
}