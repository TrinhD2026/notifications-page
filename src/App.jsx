import {useState} from 'react';
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
        isActive: true,
    },
    {
        id: 2,
        userName: "Angela Gray",
        userImg: '/avatar-angela-gray.webp',
        action: "followed you",
        group: "following",
        notiObject: "",
        isActive: true,
    },
    {
        id: 3,
        userName: "Jacob Thompson",
        userImg: '/avatar-jacob-thompson.webp',
        action: "has joined your group",
        group: "group",
        notiObject: "Chess Club",
        isActive: true,
    },
    {
        id: 4,
        userName: "Rizky Hasanuddin",
        userImg: '/avatar-rizky-hasanuddin.webp',
        action: "sent you a private message",
        group: "message",
        notiObject: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        isActive: true,
    },
    {
        id: 5,
        userName: "Kimberly Smith",
        userImg: '/avatar-kimberly-smith.webp',
        action: "commented on your picture",
        group: "picture",
        notiObject: "/image-chess.webp",
        isActive: true,
    },
    {
        id: 6,
        userName: "Nathan Peterson",
        userImg: '/avatar-nathan-peterson.webp',
        action: "reacted to your recent post",
        group: "post",
        notiObject: "5 end-game strategies to increase your win rate",
        isActive: true,
    },
    {
        id: 7,
        userName: "Anna Kim",
        userImg: '/avatar-anna-kim.webp',
        action: "left the group",
        group: "group",
        notiObject: "Chess Club",
        isActive: true,
    },
];

function App() {
    const [count,setCount]=useState(0)

    return (
        <>
            <div className="header">
                <h1>Notifications<span className="header__number-of-notis">{count}</span></h1>
                <button>Mark all as read</button>
            </div>
            <ul className="list-of-notis">
                {
                    notifications.map((notification) => {
                        return (
                            <li key={notification.id}>
                                <Notification userImg={notification.userImg}
                                    userName={notification.userName}
                                    notiAction={notification.action}
                                    notiGroup={notification.group}
                                    notiObject={notification.notiObject}
                                    isActive={notification.isActive} />
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default App
