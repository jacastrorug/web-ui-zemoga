let initialState = {
  sections: [
    {
      id: '1',
      name: 'Votes',
      participants: [
        {
          id: '100',
          name: 'Kanye West2',
          time_business: '1 month ago in Entertainment',
          description:
            'Vestibulum diam ante, prttior a odo eget, rhoncus neque. Aenean eu velit librero.',
          likes: 64,
          dislikes: 36,
          class_code: 'kanye',
          section: 0,
        },
        {
          id: '101',
          name: 'Mark Zuckerberg',
          time_business: '1 month ago in Entertainment',
          description:
            'Vestibulum diam ante, prttior a odo eget, rhoncus neque. Aenean eu velit librero.',
          likes: 64,
          dislikes: 36,
          class_code: 'mark',
          section: 0,
        },
        {
          id: '102',
          name: 'Cristina Fernández de Kirchner',
          time_business: '1 month ago in Entertainment',
          description:
            'Vestibulum diam ante, prttior a odo eget, rhoncus neque. Aenean eu velit librero.',
          likes: 64,
          dislikes: 36,
          class_code: 'cristina',
          section: 0,
        },
        {
          id: '103',
          name: 'Malala Yousafzai',
          time_business: '1 month ago in Entertainment',
          description:
            'Vestibulum diam ante, prttior a odo eget, rhoncus neque. Aenean eu velit librero.',
          likes: 64,
          dislikes: 36,
          class_code: 'malala',
          section: 0,
        },
      ],
    },
  ],
};

if (localStorage.getItem('state'))
  initialState = JSON.parse(localStorage.getItem('state'));

export default initialState;
