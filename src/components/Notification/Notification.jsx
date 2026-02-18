import './Notification.css'

function Notification({userImg,userName,notiAction,notiGroup,notiObject,notiTime,isUnread, updateUnread=null}) {

    return (
        <button className={isUnread? "notification unread":"notification"} onClick={updateUnread}>
            <img className="noti__user-img" src={userImg} alt="user avatar"/>
            <div className="noti__info">
                <div className="noti__paragraphs">
                    <p className="noti__user-name">{userName}</p>
                    <p className="noti__action">{notiAction}</p>
                    {notiGroup==="post"&&<p className="noti__object post">{notiObject}</p>}
                    {notiGroup==="group"&&<p className="noti__object group">{notiObject}</p>}
                    {isUnread&&<div className="noti_active"></div>}
                </div>
                <p className="noti__time">{`${notiTime} ago`}</p>
                {notiGroup==="message"&&<p className="noti__object message">{notiObject}</p>}

                {notiGroup==="picture"&&<img className="noti__object message" src={notiObject} alt="your picture"/>}
            </div>
        </button>
    )
}

export default Notification
