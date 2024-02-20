import React from "react"
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH } from "./images/index"

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    
    
    render() { 
        const {onChangeTextInput,contents,onTweet,deleteToTweet,tweets} = this.props;
        return (
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home Component</h5>
                <NewTweet contents={contents} onChangeTextInput={onChangeTextInput} onTweet={onTweet} />
                <TweetsList tweets = {tweets} deleteToTweet={deleteToTweet} />
            </div>
        )
    }
}