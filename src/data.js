const car1 = {
  id: 1,
  nameCar: 'Genesis G70',
  numberCar: 'K 332 MB 777',
  subscription: '14.07.22',
  widgets: [
    {
      type: 'refill',
      imageUri: 'fuel',
      title: {
        en: 'Refuel',
        ru: 'Заправить',
      },
      fuel: {
        en: 'AI-95',
        ru: 'АИ-95',
      },
      status: {
        en: 'Low fuel',
        ru: 'Мало топлива',
      },
      fullVolume: 320,
      volume: 40,
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#f6fbff'],
    },
    {
      type: 'maintenance',
      imageUri: 'repair',
      title: {
        en: 'Maintenance',
        ru: 'Техобслуживание',
      },
      status: {
        en: 'After 937 km',
        ru: 'Через 937 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'penalties',
      imageUri: 'camera',
      title: {
        en: 'Penalties',
        ru: 'Штрафы',
      },
      status: {
        en: '4 new',
        ru: '4 новых',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масло ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: 'Total',
        ru: 'Всего',
      },
      price: 5200,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'parking',
      imageUri: 'parking',
      title: {
        en: 'Parking',
        ru: 'Паркинг',
      },
      status: {
        en: '№1119',
        ru: '№1119',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 800,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'gs',
      imageUri: 'gs',
      title: {
        en: 'GS',
        ru: 'АЗС',
      },
      status: {
        en: '1.6 km',
        ru: '1.6 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: '1 L AI-95',
        ru: '1 л АИ-95',
      },
      price: 49,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
  ],
};

const car2 = {
  id: 2,
  nameCar: 'Genesis G80',
  numberCar: 'K 435 MB 777',
  subscription: '14.07.22',
  widgets: [
    {
      type: 'refill',
      imageUri: 'fuel',
      title: {
        en: 'Refuel',
        ru: 'Заправить',
      },
      fuel: {
        en: 'AI-95',
        ru: 'АИ-95',
      },
      status: {
        en: 'Low fuel',
        ru: 'Мало топлива',
      },
      fullVolume: 320,
      volume: 170,
      price: 8325,
      time: 165,
      linearGradientColor: ['#ffffff', '#f6fbff'],
    },
    {
      type: 'maintenance',
      imageUri: 'repair',
      title: {
        en: 'Maintenance',
        ru: 'Техобслуживание',
      },
      status: {
        en: 'After 137 km',
        ru: 'Через 137 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 4325,
      time: 145,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'penalties',
      imageUri: 'camera',
      title: {
        en: 'Penalties',
        ru: 'Штрафы',
      },
      status: {
        en: '4 new',
        ru: '4 новых',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масло ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: 'Total',
        ru: 'Всего',
      },
      price: 5200,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'parking',
      imageUri: 'parking',
      title: {
        en: 'Parking',
        ru: 'Паркинг',
      },
      status: {
        en: '№1119',
        ru: '№1119',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 800,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'gs',
      imageUri: 'gs',
      title: {
        en: 'GS',
        ru: 'АЗС',
      },
      status: {
        en: '1.6 km',
        ru: '1.6 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: '1 L AI-95',
        ru: '1 л АИ-95',
      },
      price: 49,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
  ],
};

const car3 = {
  id: 3,
  nameCar: 'Genesis G90',
  numberCar: 'K 332 MB 777',
  subscription: '14.07.22',
  widgets: [
    {
      type: 'refill',
      imageUri: 'fuel',
      title: {
        en: 'Refuel',
        ru: 'Заправить',
      },
      fuel: {
        en: 'AI-95',
        ru: 'АИ-95',
      },
      status: {
        en: 'Low fuel',
        ru: 'Мало топлива',
      },
      fullVolume: 320,
      volume: 70,
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#f6fbff'],
    },
    {
      type: 'maintenance',
      imageUri: 'repair',
      title: {
        en: 'Maintenance',
        ru: 'Техобслуживание',
      },
      status: {
        en: 'After 937 km',
        ru: 'Через 937 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'penalties',
      imageUri: 'camera',
      title: {
        en: 'Penalties',
        ru: 'Штрафы',
      },
      status: {
        en: '4 new',
        ru: '4 новых',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масло ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: 'Total',
        ru: 'Всего',
      },
      price: 5200,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'parking',
      imageUri: 'parking',
      title: {
        en: 'Parking',
        ru: 'Паркинг',
      },
      status: {
        en: '№1119',
        ru: '№1119',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 800,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'gs',
      imageUri: 'gs',
      title: {
        en: 'GS',
        ru: 'АЗС',
      },
      status: {
        en: '1.6 km',
        ru: '1.6 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: '1 L AI-95',
        ru: '1 л АИ-95',
      },
      price: 49,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
  ],
};

const car4 = {
  id: 4,
  nameCar: 'Genesis G170',
  numberCar: 'K 332 MB 777',
  subscription: '14.07.22',
  widgets: [
    {
      type: 'refill',
      imageUri: 'fuel',
      title: {
        en: 'Refuel',
        ru: 'Заправить',
      },
      fuel: {
        en: 'AI-95',
        ru: 'АИ-95',
      },
      status: {
        en: 'Low fuel',
        ru: 'Мало топлива',
      },
      fullVolume: 320,
      volume: 40,
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#f6fbff'],
    },
    {
      type: 'maintenance',
      imageUri: 'repair',
      title: {
        en: 'Maintenance',
        ru: 'Техобслуживание',
      },
      status: {
        en: 'After 937 km',
        ru: 'Через 937 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'penalties',
      imageUri: 'camera',
      title: {
        en: 'Penalties',
        ru: 'Штрафы',
      },
      status: {
        en: '4 new',
        ru: '4 новых',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масло ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: 'Total',
        ru: 'Всего',
      },
      price: 5200,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'parking',
      imageUri: 'parking',
      title: {
        en: 'Parking',
        ru: 'Паркинг',
      },
      status: {
        en: '№1119',
        ru: '№1119',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 800,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'gs',
      imageUri: 'gs',
      title: {
        en: 'GS',
        ru: 'АЗС',
      },
      status: {
        en: '1.6 km',
        ru: '1.6 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: '1 L AI-95',
        ru: '1 л АИ-95',
      },
      price: 49,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
  ],
};

const car5 = {
  id: 5,
  nameCar: 'Genesis G670',
  numberCar: 'K 332 MB 777',
  subscription: '14.07.22',
  widgets: [
    {
      type: 'refill',
      imageUri: 'fuel',
      title: {
        en: 'Refuel',
        ru: 'Заправить',
      },
      fuel: {
        en: 'AI-95',
        ru: 'АИ-95',
      },
      status: {
        en: 'Low fuel',
        ru: 'Мало топлива',
      },
      fullVolume: 320,
      volume: 40,
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#f6fbff'],
    },
    {
      type: 'maintenance',
      imageUri: 'repair',
      title: {
        en: 'Maintenance',
        ru: 'Техобслуживание',
      },
      status: {
        en: 'After 937 km',
        ru: 'Через 937 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 3325,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'penalties',
      imageUri: 'camera',
      title: {
        en: 'Penalties',
        ru: 'Штрафы',
      },
      status: {
        en: '4 new',
        ru: '4 новых',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масло ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: 'Total',
        ru: 'Всего',
      },
      price: 5200,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'parking',
      imageUri: 'parking',
      title: {
        en: 'Parking',
        ru: 'Паркинг',
      },
      status: {
        en: '№1119',
        ru: '№1119',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      price: 800,
      time: 45,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
    {
      type: 'gs',
      imageUri: 'gs',
      title: {
        en: 'GS',
        ru: 'АЗС',
      },
      status: {
        en: '1.6 km',
        ru: '1.6 км',
      },
      details: [
        {
          en: 'Oils',
          ru: 'Масла ДВС',
        },
        {
          en: 'Filters',
          ru: 'Фильтры',
        },
      ],
      info: {
        en: '1 L AI-95',
        ru: '1 л АИ-95',
      },
      price: 49,
      linearGradientColor: ['#ffffff', '#fafef6'],
    },
  ],
};

export const data = [car1, car2, car3, car4, car5];
