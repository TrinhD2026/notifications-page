import {useState, useRef} from 'react';
import './App.css';
import Notification from './components/Notification/Notification.jsx';

const notifications=[
    {
        id:1,
        userName: "Mark Webber",
        userImg: '/avatar-mark-webber.webp',
        action: "reacted to your recent post",
        group: "post",
        notiObject: "My first tournament today!",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 2,
        userName: "Angela Gray",
        userImg: '/avatar-angela-gray.webp',
        action: "followed you",
        group: "following",
        notiObject: "",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 3,
        userName: "Jacob Thompson",
        userImg: '/avatar-jacob-thompson.webp',
        action: "has joined your group",
        group: "group",
        notiObject: "Chess Club",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 4,
        userName: "Rizky Hasanuddin",
        userImg: '/avatar-rizky-hasanuddin.webp',
        action: "sent you a private message",
        group: "message",
        notiObject: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 5,
        userName: "Kimberly Smith",
        userImg: '/avatar-kimberly-smith.webp',
        action: "commented on your picture",
        group: "picture",
        notiObject: "/image-chess.webp",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 6,
        userName: "Nathan Peterson",
        userImg: '/avatar-nathan-peterson.webp',
        action: "reacted to your recent post",
        group: "post",
        notiObject: "5 end-game strategies to increase your win rate",
        notiTime: "1m",
        isUnread: true,
    },
    {
        id: 7,
        userName: "Anna Kim",
        userImg: '/avatar-anna-kim.webp',
        action: "left the group",
        group: "group",
        notiObject: "Chess Club",
        notiTime: "1m",
        isUnread: true,
    },
];

function App() {
    const [count,setCount]=useState(notifications.length);
    const [notis,setNotis]=useState([...notifications]);
    const markAllBtn=useRef(null);

    function updateUnread(id) {
        const selected=notis.find(n => n.id===id);
        if(selected.isUnread) {
            console.log(`update unread ${id}`);
            selected.isUnread=false;
            setNotis(notis);
            setCount((notis.filter(n => n.isUnread)).length);
        }
    }

    function markAllUnread() {
        if(count===0) {
            return;
        }

        notis.forEach(notification => {
            notification.isUnread=false;
        });

        setNotis(notis);
        setCount(0);
    }

    return (
        <>
            <div className="header">
                <h1>Notifications <span className="header__number-of-notis">{count}</span></h1>
                <button ref={markAllBtn} className="transparent-btn" onClick={() => {
                    markAllUnread();
                    markAllBtn.current.blur();
                }}>Mark all as read</button>
            </div>
            <ul className="list-of-notis">
                {
                    notis.map((notification) => {
                        return (
                            <li key={notification.id}>
                                <Notification
                                    userImg={notification.userImg}
                                    userName={notification.userName}
                                    notiAction={notification.action}
                                    notiGroup={notification.group}
                                    notiObject={notification.notiObject}
                                    notiTime={notification.notiTime}
                                    isUnread={notification.isUnread}
                                    updateUnread={() => updateUnread(notification.id)} />
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default App
