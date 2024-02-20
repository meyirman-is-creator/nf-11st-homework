import Tweet from "./Tweet"




function TweetsList({tweets, deleteToTweet}){
    return tweets.map((tweet)=><Tweet tweet ={tweet} key = {tweet.id} deleteToTweet={deleteToTweet}/>)
};
export default TweetsList;