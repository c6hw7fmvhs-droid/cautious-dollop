/* Instagram 내용. 비어 있는 항목은 화면 모양만 보입니다.
   img / avatar 에는 assets/images 안의 사진 경로(예: "assets/images/a.jpg")를 넣으세요.
   텍스트 안의 {이름}은 접속자가 입력한 이름으로 바뀝니다. */
D.instagram={
 username:"jeongwon", name:"정원이", bio:"", avatar:"", private:true,
 followers:0, following:0,
 myNote:"내 메모",
 stories:[],      /* [{name, avatar}] */
 feed:[],         /* [{user, avatar, img, likes, caption}] */
 reels:[{user:"triplescosmos",video:"assets/videos/reel1.mp4",img:"assets/images/reel1.jpg",caption:""}],        /* [{user, avatar, caption, video:"assets/videos/a.mp4", img:"썸네일(선택)", likes, comments, reposts, shares, saves}] */
 notes:[],        /* [{name, avatar, text}] */
 threads:[],      /* [{name, avatar, preview, time, unread, pinned, muted, msgs:[{date}|{t, me}]}] */
 explore:[],      /* [{img}] */
 highlights:[],   /* [{title, img}] */
 posts:[{imgs:["assets/images/post1_1.jpg","assets/images/post1_2.jpg"],caption:"",date:"2026년 10월 2일"}]  /* [{imgs:[사진 경로들], caption, date, user(선택), likes(선택)}] */
};
