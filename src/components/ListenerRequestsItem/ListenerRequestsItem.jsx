import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './ListenerRequestsItem.css';

export default function ListenerRequestsItem( {listenerRequest} ) {
    const dispatch = useDispatch();

    // get id of listener request passed through local props
    let id = listenerRequest.id;

    // local state
    let [isRespondedTo, setIsRespondedTo] = useState(false);

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

    switch (isRespondedTo) {
        case false:
            return (
                <>
                    <td>{listenerRequest.first_name} {listenerRequest.last_name}</td>
                    <td>{formatDate(listenerRequest.time_submitted)}</td>
                    <td>{listenerRequest.request_info}</td>
                    <td><button className="respondBtn" onClick={() => setIsRespondedTo(true)}>Responded</button></td>
                    <td><button className="btn" onClick={deleteListenerRequest}>Delete</button></td>
                </>
            );
        case true:
            return (
                <>
                    <td className="respondedTo">{listenerRequest.first_name} {listenerRequest.last_name}</td>
                    <td className="respondedTo">{formatDate(listenerRequest.time_submitted)}</td>
                    <td className="respondedTo">{listenerRequest.request_info}</td>
                    <td className="respondedTo">
                        <button className="respondedBtn" onClick={() => setIsRespondedTo(false)}>Responded</button>
                    </td>
                    <td className="respondedTo">
                        <button className="btn" onClick={deleteListenerRequest}>Delete</button>
                    </td>
                </>
            );
        default:
            return null;
    }
}