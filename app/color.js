const colors = {
  dolphins: {
    primary: '#008E97', //aqua//
    secondary: '#F58220', //orange//
    accent: '#fff',
  },
  falcons: {
    primary: 'red',
    secondary: 'black',
  },
};

export default function(name) {
  return colors[name];
}

// Example-- style="color: {{model.teamColors.primary}}"
