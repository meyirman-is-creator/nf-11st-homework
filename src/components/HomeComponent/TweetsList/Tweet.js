import { COMMENT, KZ_IMG_PATH, LIKE, RETWEET, SHARE } from "../images";


export default function Tweet({tweet,deleteToTweet}) {

    return (
        <div className="mt-3 px-3" style={{borderBottom:'2px solid whitesmoke'}}>
            <button onClick={()=>deleteToTweet(tweet.id)}>delete</button>
            <p className="mx-5" style={{ fontSize: 13, fontWeight: 600 }}>You might like! <span style={{ color: 'blue' }}>See more</span></p>
            <div className="d-flex">
                <img src={tweet.img} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <div className="mx-3">
                    <p style={{fontWeight:600, }}> {tweet.authorName} <span style={{color:'grey'}}>{tweet.authorUserName}</span></p>

                    <p>{tweet.content.length>200 ? tweet.content.substring(0,197)+'...' : tweet.content}</p>
                </div>
                
            </div>
            <div className="d-flex m-auto justify-content-between" style={{ width: '80%' }}>
                <div className="d-flex ">
                    <div style={{ width: 20, height: 20 }}>{COMMENT}</div>
                    <p className="px-1">{tweet.replies}</p>
                </div>
                <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>{RETWEET}</div>
                    <p className="px-1">{tweet.retweets}</p>
                </div>
                <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>{LIKE}</div>
                    <p className="px-1">{tweet.likes}</p>
                </div>
                <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>{SHARE}</div>
                    <p className="px-1">{tweet.shares}</p>
                </div>
            </div>
        </div>
    )
}