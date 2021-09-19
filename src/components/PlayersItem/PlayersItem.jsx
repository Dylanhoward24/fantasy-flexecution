import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import EditTiers from '../EditTiers/EditTiers';
import EditTierRanks from "../EditTierRanks/EditTierRanks";

export default function PlayersItem( {player} ) {
    const dispatch = useDispatch();

    // get id of player passed through local props
    let id = player.playerId;

    // local state
    let [isEditViewDisplayed, setIsEditViewDisplayed] = useState(false);
    let [editedPlayersTag, setEditedPlayersTag] = useState(player.tags);
    let [editedPlayer, setEditedPlayer] = useState({
        firstName: player.firstName,
        lastName: player.lastName,
        team: player.teamId,
        position: player.positionId
    });

    // global state
    const positions = useSelector((store) => store.positions);
    const teams = useSelector((store) => store.teams);
    const tags = useSelector((store) => store.tags);

    function deletePlayer() {
        axios.delete(`api/players/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
    }

    function updatePlayer() {
        axios.put(`api/players/${id}`, {
            editedPlayer
        }).then(() => {
            dispatch({
                type: 'FETCH_PLAYERS'
            });
        });
        toggleDefault();
    }
    
    // functions that toggle the view between
    // edit view
    function toggleEdit() {
        setIsEditViewDisplayed(true);
    }
    // and default view again
    function toggleDefault() {
        setIsEditViewDisplayed(false);
    }

    return (
        <>
        {isEditViewDisplayed === false ?
            <>
            <td>{player.firstName} {player.lastName}</td>
            <td>{player.team}</td>
            <td>{player.position}</td>
            {player.tier.map((tier, i) => (
                <td key={i}>{tier}</td>
            ))}
            {player.tierRank.map((tierRank, i) => (
                <td key={i}>{tierRank}</td>
            ))}
            <td>{player.tags}</td>
            <td><button onClick={toggleEdit} className="btn">Edit</button></td>
            <td><button onClick={deletePlayer} className="btn">Delete</button></td>
            <td>{player.addedBy}</td>
            </>
        :
            <>
            <td>
                <input type="text" value={editedPlayer.firstName} placeholder="First Name"
                    onChange={(e) => setEditedPlayer({...editedPlayer, firstName: e.target.value})}/>
                <br />
                <input type="text" value={editedPlayer.lastName} placeholder="Last Name"
                    onChange={(e) => setEditedPlayer({...editedPlayer, lastName: e.target.value})}/>
            </td>
            <td>
                <select value={editedPlayer.team}
                    onChange={(event) => setEditedPlayer({...editedPlayer, team: event.target.value})}>
                    <option disabled value='0'>Team</option>
                    {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <select value={editedPlayer.position}
                    onChange={(event) => setEditedPlayer({...editedPlayer, position: event.target.value})}>
                    <option disabled value='0'>Position</option>
                    {positions.map((position) => (
                        <option key={position.id} value={position.id}>
                            {position.position}
                        </option>
                    ))}
                </select>
            </td>
            <EditTiers player={player}/>
            <EditTierRanks player={player}/>
            <td>
                <select value={0}
                    onChange={(event) => setEditedPlayersTag(event.target.value)}>
                    <option disabled value='0'>Tag</option>
                    {tags.map((tag) => (
                        <option key={tag.id} value={tag.id}>
                            {tag.tag}
                        </option>
                    ))}
                </select>
            </td>
            <td></td>
            <td>
                <center>
                    <button className="btn" onClick={updatePlayer}>Save</button>
                </center>
            </td>
            <td></td>
            </>
        }
        </>
    );
}