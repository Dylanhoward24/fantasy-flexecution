import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import UploadPodcastItem from "../UploadPodcastItem/UploadPodcastItem";
import './UploadPodcast.css';

export default function UploadPodcast() {
    const dispatch = useDispatch();

    // pull in global state user from reducer to pluck id for upload
    const user = useSelector((store) => store.user);
    
    // to be used as a constants for each newPodcast
    const userId = user.id
    const imageSource = "https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg";

    let [newPodcast, setNewPodcast] = useState({
        userId, imageSource, description: ''
    });

    // const podcasts = useSelector(store => store.podcasts);

    function addNewPodcast(e) {
        e.preventDefault();

        // post local state to the db
        axios.post('/api/podcasts', {newPodcast})
            .then(() => {
                // then shout to fetch/set global state
                // equal to the new db values after post
                dispatch({
                    type: 'FETCH_PODCASTS'
                });
            });
        
        // clear the input field
        setNewPodcast({
            userId, imageSource, description: ''
        });
    }

    return (
        <div className="container">
            <h2>Upload a Podcast</h2>
            <h4>Add new</h4>
            <form onSubmit={addNewPodcast}>
                <textarea id="description" value={newPodcast.description} placeholder="Description"
                  onChange={(e) => setNewPodcast({...newPodcast, description: e.target.value})}/>
                <br />
                <button>Add</button>
            </form>
            <br />
            <table>
                <tr>
                    <th>Description</th>
                    <th>Remove</th>
                </tr>
                {/* {podcasts.map((item, i) => (
                    <tr key={i}>
                        <UploadPodcastItem
                            item={item}
                        />
                    </tr>
                ))} */}
            </table>
        </div>
);
}