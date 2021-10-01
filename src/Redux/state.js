import rerenderEntireTree from "./render";

const state = {
  sidebar: {
    navLinksData: [
      { url: '/profile', title: 'Profile' },
      { url: '/dialogs', title: 'Messages' },
      { url: '/news', title: 'News' },
      { url: '/musics', title: 'Musics' },
      { url: '/videos', title: 'Videos' },
      { url: '/setting', title: 'Settings' }
    ],
    userOnlineData: [
      { titleLink: 'Linda Lohan', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-2.jpg' },
      { titleLink: 'Sophia Lee', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-3.jpg' },
      { titleLink: 'John Doe', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-4.jpg' },
      { titleLink: 'Alexis Clark', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-5.jpg' },
      { titleLink: 'James Carter', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-6.jpg' },
      { titleLink: 'Robert Cook', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-7.jpg' },
      { titleLink: 'Richard Bell', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-8.jpg' },
      { titleLink: 'Anna Young', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-9.jpg' },
      { titleLink: 'Julia Cox', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-10.jpg' }
    ]
  },
  content: {
    postData: [],
    newPostData: '',
    dialogItemData: [
      {
        id: 'ums01',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userName: 'Виктор Семенов'
      },
      {
        id: 'ums02',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-2.jpg',
        userName: 'Лариса Чабатарева'
      },
      {
        id: 'ums03',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-3.jpg',
        userName: 'Ирина Белая'
      },
      {
        id: 'ums04',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-4.jpg',
        userName: 'Иван Ольгович'
      },
      {
        id: 'ums05',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-5.jpg',
        userName: 'Марго Матюхова'
      },
      {
        id: 'ums06',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-6.jpg',
        userName: 'Грегор Чабатарева'
      },
      {
        id: 'ums07',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-7.jpg',
        userName: 'Гена Олехнович'
      },
      {
        id: 'ums08',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-8.jpg',
        userName: 'Вася Ивановна'
      },
      {
        id: 'ums09',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-9.jpg',
        userName: 'Олейна Свинная'
      },
      {
        id: 'ums10',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-10.jpg',
        userName: 'Илона Олехнович'
      },
      {
        id: 'ums11',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-11.jpg',
        userName: 'Наталья Ивановна'
      }
    ]
  },
  messages: {
    userMessageData: [
      {
        userName: 'Виктор',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userTextMessage: 'Привет, как дела, что ты делаешь?'
      },
      {
        userName: 'Сарра',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
        userTextMessage: 'Привет, да норм все, отдыхаю, а ты?'
      },
      {
        userName: 'Виктор',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userTextMessage: 'Привет, как дела, что ты делаешь?'
      },
      {
        userName: 'Сарра',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
        userTextMessage: 'Привет, да норм все, отдыхаю, а ты?'
      },
      {
        userName: 'Виктор',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userTextMessage: 'Привет, как дела, что ты делаешь?'
      },
      {
        userName: 'Сарра',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
        userTextMessage: 'Привет, да норм все, отдыхаю, а ты?'
      },
      {
        userName: 'Виктор',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userTextMessage: 'Привет, как дела, что ты делаешь?'
      },
      {
        userName: 'Сарра',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
        userTextMessage: 'Привет, да норм все, отдыхаю, а ты?'
      },
      {
        userName: 'Виктор',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg',
        userTextMessage: 'Привет, как дела, что ты делаешь?'
      },
      {
        userName: 'Сарра',
        userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
        userTextMessage: 'Привет, да норм все, отдыхаю, а ты?'
      }
    ]
  },
  randomFriendsSection: {
    userData: [
      { avatarUrl: 'https://themified.com/friend-finder/images/users/user-11.jpg', textName: 'Diand Amber' },
      { avatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg', textName: 'Cris Haris' },
      { avatarUrl: 'https://themified.com/friend-finder/images/users/user-13.jpg', textName: 'Brian Walton' },
      { avatarUrl: 'https://themified.com/friend-finder/images/users/user-14.jpg', textName: 'Olivia Steward' },
      { avatarUrl: 'https://themified.com/friend-finder/images/users/user-15.jpg', textName: 'Sophia Page' }
    ]
  }
}

export const updateNewPostText = newText => {
  state.content.newPostData = newText;
  rerenderEntireTree(state);
};

export const addPost = () => {
  const DATE = (new Date()).toLocaleDateString();
  const TIME = (new Date()).toLocaleTimeString();
  const postDate = `${DATE} в ${TIME}`;
  // const postDate = `${date.getDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const newPost = {
    id: state.content.postData.length + 1,
    userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-1.jpg',
    authorName: 'Сарра Круиз',
    postDate: postDate,
    userTextPost: state.content.newPostData,
  }
  state.content.postData.push(newPost);
  updateNewPostText('');
  rerenderEntireTree(state);
}

export default state;