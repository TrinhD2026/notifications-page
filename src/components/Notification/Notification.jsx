import './Notification.css'

function Notification({userImg,userName,notiAction,notiGroup, notiObject, isActive}) {

    return (
        <div className={isActive ? "notification active" : "notification"}>
            <img className="noti__user-img" src={userImg} alt="user avatar"/>
            <div className="noti__info">
                <div className="noti__paragraphs">
                    <p className="noti__user-name">{userName}</p>
                    <p className="noti__action">{notiAction}</p>
                    {notiGroup==="post"&&<p className="noti__object post">{notiObject}</p>}
                    {notiGroup==="group"&&<p className="noti__object group">{notiObject}</p>}
                    {isActive&&<div className="noti_active"></div>}
                </div>
                
                {notiGroup==="message"&&<p className="noti__object message">{notiObject}</p>}

                {notiGroup==="picture"&&<img className="noti__object message" src={notiObject} alt="your picture"/>}
            </div>
        </div>
    )
}

export default Notification
