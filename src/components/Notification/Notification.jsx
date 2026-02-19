import './Notification.css'

function Notification({userImg,userName,notiAction,notiGroup,notiObject,notiTime,isUnread, updateUnread=null}) {

    return (
        <div className={isUnread? "notification unread":"notification"} onClick={updateUnread}>
            <img className="noti__user-img" src={userImg} alt="user avatar"/>
            <div className="noti__info">     
                <div>
                    <div>
                        <div className="noti__paragraphs">
                            <a className="text-link noti__user-name" href="#" target="_blank">{userName}</a>
                            <p className="noti__action">{notiAction}</p>
                            {notiGroup==="post"&&<a className="text-link noti__post" href="#" target="_blank">{notiObject}</a>}
                            {notiGroup==="group"&&<a className="text-link noti__group" href="#" target="_blank">{notiObject}</a>}
                            {isUnread&&<div className="noti_unread-status"></div>}
                        </div>

                        <p className="noti__time">{`${notiTime} ago`}</p>
                    </div>
                    {notiGroup==="picture"&&<a href="#" target="_blank"><img className="noti__picture" src={notiObject} alt="your picture" /></a>}
                </div>
                {notiGroup==="message"&&<a className="noti__message" href="#" target="_blank">{notiObject}</a>}
            </div>
        </div>
    )
}

export default Notification
