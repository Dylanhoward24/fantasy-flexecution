import axios from "axios";
import { useDispatch } from "react-redux";

export default function UploadPodcastItem({ item }) {
    const dispatch = useDispatch();

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    // get id of item passed through local props
    let id = item.id;

    function deletePodcast() {
        axios.delete(`/api/podcasts/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_PODCASTS'
                });
            });
    }

    return (
        <>
            <td>{item.description}</td>
            <td>{formatDate(item.time_uploaded)}</td>
            <td><button onClick={deletePodcast}>Delete</button></td>
        </>
    );
}