import axios from "axios";
import { useDispatch } from "react-redux";

export default function ListenerRequestsItem( {listenerRequest} ) {
    const dispatch = useDispatch();

    // get id of listener request passed through local props
    let id = listenerRequest.id;

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    function deleteListenerRequest() {
        console.log(listenerRequest.id);
        
        axios.delete(`/api/listener-requests/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_LISTENER_REQUESTS'
                });
            });
    }

    return (
        <>
            <td>{listenerRequest.first_name} {listenerRequest.last_name}</td>
            <td>{formatDate(listenerRequest.time_submitted)}</td>
            <td>{listenerRequest.request_info}</td>
            <td><button className="btn" onClick={deleteListenerRequest}>Responded</button></td>
        </>
    );
}