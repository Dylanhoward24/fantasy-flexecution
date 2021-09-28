import { useSelector } from "react-redux";

// import local props component for table appending
import ListenerRequestsItem from "../ListenerRequestsItem/ListenerRequestsItem";

export default function ListenerRequests() {

    // get the listener requests from the redux store
    const listenerRequests = useSelector((store) => store.listenerRequests);

    return (
        <div className="container">
            <center>
                <h2>Listener Requests</h2>
                {/* map through the listener requests array provided via redux store */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Submitted</th>
                            <th>Request description</th>
                            <th>Response</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listenerRequests.map((listenerRequest, i) => (
                            <tr key={i}>
                                <ListenerRequestsItem
                                    listenerRequest={listenerRequest}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}