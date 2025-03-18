const { useReducer } = React;

//ACTIONS
const TOGGLE_BOX = '[GiftBox] Toggle';
const toggleBox = () => {
  return { type: TOGGLE_BOX };
};

//REDUCERS (Update)
const DEFAULT = { open: false, wasOpen: false };

const reducer = (
state = DEFAULT,
{ type }) =>
{

  switch (type) {
    case TOGGLE_BOX:{
        return {
          open: !state.open,
          wasOpen: state.open };

      }
    default:return state;}

};

//COMPONENT

const GiftBox = () => {
  //hooks are an amazing functional solution!
  const [state, dispatch] = useReducer(reducer, DEFAULT);

  return /*#__PURE__*/(
    React.createElement("div", { className: "floor" }, /*#__PURE__*/
    React.createElement("div", { className: "shadow" }), /*#__PURE__*/
    React.createElement("div", { className: "shadow2" }), /*#__PURE__*/
    React.createElement("div", { className: "shadow3" }), /*#__PURE__*/
    React.createElement("div", { className: "box" },


    state.open ? /*#__PURE__*/
    React.createElement("i", { className: "fa fa-heart heart-gift" }) : /*#__PURE__*/
    React.createElement(React.Fragment, null), /*#__PURE__*/


    React.createElement("div", {
      className:
      state.open ? 'lid open' :
      state.wasOpen ? 'lid close' :
      'lid',

      onClick: e => dispatch(toggleBox()) }, /*#__PURE__*/

    React.createElement("div", { className: "qmark" },
    state.open ? '!' : '?'), /*#__PURE__*/



    React.createElement("div", { className: "face ltop" }), /*#__PURE__*/
    React.createElement("div", { className: "face lleft" }), /*#__PURE__*/
    React.createElement("div", { className: "face lright" })), /*#__PURE__*/


    React.createElement("div", { className: "face top" }), /*#__PURE__*/
    React.createElement("div", { className: "face left" }), /*#__PURE__*/
    React.createElement("div", { className: "face right" }))));





};

// render

ReactDOM.render( /*#__PURE__*/
React.createElement(GiftBox, null),
document.getElementById('root'));