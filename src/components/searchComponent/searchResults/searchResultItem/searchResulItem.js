import './searchResultItem.css'
export default function SearchResultItem({item}){
    return (
        <div className="item">
            <img className='item__img' src={item.img}/>
            <div className="item__content">
                <div className="item__name">{item.authorName} <span>{item.authorUserName}</span></div>
                <div className="item__text">{item.content}</div>
            </div>
        </div>
    );
};