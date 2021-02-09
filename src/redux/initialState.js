export const initialState = {
  posts: {
    data: [
      {
        title: 'TV for sale. cheaply !', // min 10 chars
        content: 'I will sell a very good TV. Size 40". Good picture quality. I recommend.', // min 20 chars
        publicDate: '9.02.2021',
        lastUpdate: '9.02.2021',
        email: 'johndoe@example.com',
        status: 'published', // can be also: 'draft' | 'closed'
        price: 200,
        phone: '123321123',
        id: 1,
      },
      {
        title: 'iPhone for sale. Good price !', // min 10 chars
        content: 'I will sell iPhone 7+. This is the best offer. there is a case, headphones and charger in the set', // min 20 chars
        publicDate: '8.02.2021',
        lastUpdate: '8.02.2021',
        email: 'johndoe@example.com',
        status: 'published', // can be also: 'draft' | 'closed'
        price: 100,
        phone: '123321123',
        id: 2,
      },
      {
        title: 'Desk for programming student', // min 10 chars
        content: 'I will sell very comfortable desk. Perfect for programming or gaming', // min 20 chars
        publicDate: '5.02.2021',
        lastUpdate: '6.02.2021',
        email: 'johndoe@example.com',
        status: 'draft', // can be also: 'published' | 'closed'
        price: 80,
        phone: '123321123',
        id: 3,
      },
      {
        title: 'Skoda Octavia 2015', // min 10 chars
        content: 'Skoda Octavia for sale. Very comfortale car for you and your family. Combi version with Diesel engine, leather seats and BEST PRICE !', // min 20 chars
        publicDate: '4.02.2021',
        lastUpdate: '4.02.2021',
        email: 'johndoe@example.com',
        status: 'closed', // can be also: 'published' | 'deaft'
        price: 3000,
        phone: '123321123',
        id: 4,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
