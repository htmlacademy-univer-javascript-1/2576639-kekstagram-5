function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Мария',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Ольга',
  'Иван',
  'Константин',
  'Татьяна'
];

function generateComments() {
  const comments = [];
  const numberOfComments = getRandomInt(0, 30);
  for (let i = 0; i < numberOfComments; i++) {
    const commentId = i + 1;
    const avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
    const message = messages[getRandomInt(0, messages.length - 1)];
    const name = names[getRandomInt(0, names.length - 1)];

    comments.push({
      id: commentId,
      avatar: avatar,
      message: message,
      name: name
    });
  }

  return comments;
}

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии номер ${i}. Это фотография, которая запечатлела момент.`,
      likes: getRandomInt(15, 200),
      comments: generateComments()
    };

    photos.push(photo);
  }

  return photos;
}

const photoArray = generatePhotos();

console.log(photoArray);
