navigator.permissions.query({
  name: "clipboard-read"
}).then(({state}) => console.log(state));
// granted

navigator.permissions.query({
  name: "clipboard-read", 
  allowWithoutGesture: true
}).then(({state}) => console.log(state));
// prompt
