
export const initialState = {
  posts: {
    account: {
      logged: true,
      name: 'John',
      email: 'johndoe@example.com',
    },
    admin: false,
    data: [
      {
        title: 'TV for sale. Cheaply !', // min 10 chars
        content: 'The JVC LT-50C890 Android TV 50" Smart 4K Ultra HD HDR LED TV is perfect for film fans, game-lovers and telly addicts. 4K Ultra HD - up to four times the resolution of HD TVs - offers the very best detail when you\'re watching 4K content. HDR (High Dynamic Range) helps to bring out the depth of colour and brightness in scenes that help to make it closer to real life. It\'s perfect for seeing the detail hidden in dark gloomy scenes, or for enjoying the full spectrum of colour in a nature documentary.', // min 20 chars
        publicDate: '9.02.2021',
        lastUpdate: '9.02.2021',
        email: 'johndoe@example.com',
        name: 'John',
        status: 'published', // can be also: 'draft' | 'closed'
        price: 200,
        phone: '123321123',
        id: 1,
        photo: 'tv.jpeg',
        location: 'Poznań',
      },
      {
        title: 'iPhone 11 PRO. Good price !', // min 10 chars
        content: 'The completely refurbished Apple iPhone 11 Pro comes with the perfect Retina XDR display. 5.8-inch OLED Multi-Touch display allows you to fully comfortably use all multimedia and at the same time makes the phone not too big. The heart of the new iPhone 11 Pro refurbed ™ is the ultra-fast A13 Bionic processor. The perfect camera with which the iPhone is equipped will allow you to take photos that a professional photographer would not be ashamed of. The new Face ID - 3D face scanner will enable you to unlock the device with a glance.', // min 20 chars
        publicDate: '8.02.2021',
        lastUpdate: '8.02.2021',
        email: 'annadoe@example.com',
        name: 'Anna',
        status: 'published', // can be also: 'draft' | 'closed'
        price: 100,
        phone: '123321123',
        id: 2,
        photo: 'phone.jpeg',
        location: 'Warszawa',

      },
      {
        title: 'The JÄRVFJÄLLET swivel chair', // min 10 chars
        content: 'Everyone has a different physique. The JÄRVFJÄLLET swivel chair is designed so that you can adjust the headrest, lumbar support and the height and depth of the seat, so it can be perfectly adapted to your height and body shape. The mesh material of the backrest allows air to circulate, which relieves the back during long sitting. 10-year guarantee. Read about the terms in the guarantee brochure.', // min 20 chars
        publicDate: '5.02.2021',
        lastUpdate: '6.02.2021',
        email: 'januszdoe@example.com',
        name: 'Janusz',
        status: 'draft', // can be also: 'published' | 'closed'
        price: 80,
        phone: '123321123',
        id: 3,
        photo: 'chair.jpg',
        location: 'Łódź',

      },
      {
        title: 'Skoda Octavia 2015', // min 10 chars
        content: 'The car is offered in the DAS WELT AUTO program. It is a used car sale and repurchase program operating at the dealerships of Volkswagen, SEAT, Škoda and Volkswagen Commercial Vehicles. The main idea of the program is to sell the best, reliable used cars, the history, mileage and technical condition of which have been thoroughly checked and verified to ensure the comfort of buyers and the certainty of buying a used car as a standard car from the showroom. At Das WeltAuto you can be sure that you are buying a car with a proven history and mileage. We check the technical condition of our cars in a rigorous test covering as many as 117 control points.', // min 20 chars
        publicDate: '4.02.2021',
        lastUpdate: '4.02.2021',
        email: 'marthadoe@example.com',
        name: 'Martha',
        status: 'closed', // can be also: 'published' | 'deaft'
        price: 3000,
        phone: '123321123',
        id: 4,
        photo: 'car.jpeg',
        location: 'Wrocław',

      },
      {
        title: 'Marshall jtm 45 18W', // min 10 chars
        content: 'Hi, for sale a copy of the JTM 45 made by Maddog, 18w version, on military Russian 6p6s tubes. Serial FX loop, master Volume. Head is new. I am selling because of switching to a combo from another manufacturer.', // min 20 chars
        publicDate: '7.02.2021',
        lastUpdate: '7.02.2021',
        email: 'johndoe@example.com',
        name: 'John',
        status: 'published', // can be also: 'close' | 'draft'
        price: 300,
        phone: '123321123',
        id: 5,
        photo: 'marshall.jpg',
        location: 'Kraków',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
