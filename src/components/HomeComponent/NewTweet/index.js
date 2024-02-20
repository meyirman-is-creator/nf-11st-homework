import { PROFILE_IMG_PATH } from "../images";

export default function NewTweet({contents, onChangeTextInput, onTweet}){
    return (
        <div className="p-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <img src={PROFILE_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}}/>
            <input onChange={onChangeTextInput} value={contents} placeholder="Whats hapenning" style={{border:'none', outline:'none', fontSize:18}} className="mx-3"/>  
            <button onClick={onTweet}>new tweet</button>  
        </div>
    )
};