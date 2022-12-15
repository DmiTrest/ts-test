export const getImage = name => {
  switch (name) {
    case 'repair':
      return require('../../assets/images/repair.png');
    case 'fuel':
      return require('../../assets/images/fuel.png');
    case 'camera':
      return require('../../assets/images/camera.png');
    case 'parking':
      return require('../../assets/images/parking.png');
    case 'gs':
      return require('../../assets/images/gs.png');
    case 'avatar':
      return require('../../assets/images/avatar.jpg');
  }
};
