const colors = {

  jets: {
    primary: '#203731',
    secondary: '#fff',
    accent: '',
  },

  browns: {
    primary: '#311D00',
    secondary: '#FF3C00',
    accent: '#fff',
  },

  ravens: {
    primary: '#241773',
    secondary: '#000',
    accent: '#9E7C0C',
  },

  dolphins: {
    primary: '#008E97', //aqua//
    secondary: '#F58220', //orange//
    accent: '#fff',
  },

  steelers: {
    primary: '#000',
    secondary: '#FFB612',
    accent: '#fff',
  },

  jaguars: {
    primary: '#000',
    secondary: '#006778',
    accent: '#9F792C',
  },

  bills: {
    primary: '#00338D',
    secondary: '#C60C30',
    accent: '#fff',
  },

  texans: {
    primary: '#03202F',
    secondary: '#A71930',
    accent: '#fff',
  },

  colts: {
    primary: '#002C5F',
    secondary: '#fff',
    accent: '#fff',
  },

  titans: {
    primary: '#002244',
    secondary: '#4B92DB',
    accent: '#C60C30',
  },

  broncos: {
    primary: '#002244',
    secondary: '#FB4F14',
    accent: '#fff',
  },

  chiefs: {
    primary: '#E31837',
    secondary: '#FFB612',
    accent: '#fff',
  },

  raiders: {
    primary: '#000',
    secondary: '#A5ACAF',
    accent: '#fff',
  },

  chargers: {
    primary: '#002244',
    secondary: '#0073CF',
    accent: '#FFB612',
  },

  redskins: {
    primary: '#773141',
    secondary: '#FFB612',
    accent: '#fff',
  },

  eagles: {
    primary: '#004953',
    secondary: '#A5ACAF',
    accent: '#000',
  },

  giants: {
    primary: '#0B2265',
    secondary: '#A71930',
    accent: '#fff',
  },

  cowboys: {
    primary: '#002244',
    secondary: '#fff',
    accent: '#B0B7BC',
  },

  vikings: {
    primary: '#4F2683',
    secondary: '#FFC62F',
    accent: '#fff',
  },

  packers: {
    primary: '#203731',
    secondary: '#FFB612',
    accent: '#fff',
  },

  lions: {
    primary: '#005A8B',
    secondary: '#B0B7BC',
    accent: '#000',
  },

  bears: {
    primary: '#0B162A',
    secondary: '#C83803',
    accent: '#fff',
  },

  panthers: {
    primary: '#0085CA',
    secondary: '#000',
    accent: '#BFC0BF',
  },

  falcons: {
    primary: '#000',
    secondary: '#A71930',
    accent: '#A5ACAF',
  },

  saints: {
    primary: '#000',
    secondary: '#9F8958',
    accent: '#fff',
  },

  buccaneers: {
    primary: '#D50A0A',
    secondary: '#34302B',
    accent: '#FF7900',
  },

  seahawks: {
    primary: '#002244',
    secondary: '#69BE28',
    accent: '#A5ACAF',
  },

  '49ers': {
    primary: '#AA0000',
    secondary: '#B3995D',
    accent: '#fff',
  },

  cardinals: {
    primary: '#97233F',
    secondary: '#000',
    accent: '#fff',
  },

  bengals: {
    primary: '#000',
    secondary: '#FB4F14',
    accent: '#fff',
  },

  patriots: {
    primary: '#002244',
    secondary: '#C60C30',
    accent: '#B0B7BC',
  },

  rams: {
    primary: '#002244',
    secondary: '#B3995D',
    accent: '#fff',
  },

};

export default function(name) {
  return colors[name];
}

// Example-- style="color: {{model.teamColors.primary}}"
