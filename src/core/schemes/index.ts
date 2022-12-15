export interface components {
  schemas: {
    HomeResource: {
      id: number;
      nameCar: string;
      numberCar: string;
      subscription: string;
      widgets: Array<components['schemas']['WidgetsType']>;
    };
    WidgetsType: {
      type: 'refill' | 'maintenance' | 'penalties' | 'parking' | 'gs';
      title: components['schemas']['TranslationType'];
      fuel?: components['schemas']['TranslationType'];
      status: components['schemas']['TranslationType'];
      info?: components['schemas']['TranslationType'];
      details?: Array<components['schemas']['TranslationType']>;
      imageUri: string;
      volume?: number;
      fullVolume?: number;
      price: number;
      time?: number;
      linearGradientColor: Array<string>;
    };
    TranslationType: {
      en: string;
      ru: string;
    };
  };
}
