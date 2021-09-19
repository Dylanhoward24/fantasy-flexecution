import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function EditAddPlayersItem( {host} ) {
   const dispatch = useDispatch();
 
   // local state
   let [newPlayerTier, setNewPlayerTier] = useState(0);
   let [newPlayerRank, setNewPlayerRank] = useState('');
   const hostId = host.id;
 
   // global state
   const tiers = useSelector((store) => store.tiers);
 
   function submitPlayerRanking() {
       dispatch({
           type: 'ADD_NEW_PLAYER_RANKING',
           payload: {
               hostId,
               newPlayerTier,
               newPlayerRank
           }
       });
       setNewPlayerTier(0);
       setNewPlayerRank('');
   }
 
   return (
        <>
            <select value={newPlayerTier}
            onChange={(event) => setNewPlayerTier(event.target.value)}>
                <option disabled value='0'>Tier ({host.first_name})</option>
                {tiers.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                        {tier.tier_name}
                    </option>
                ))}
            </select>
            <input type="number" value={newPlayerRank} placeholder="Rank"
                onChange={(event) => setNewPlayerRank(event.target.value)}
            />
            <button className="btn" type="button" onClick={submitPlayerRanking}>Confirm</button>
       </>
   );
}