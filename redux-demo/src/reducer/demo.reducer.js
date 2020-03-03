const initialSate = {
  name: '',
  id: ''
};

export default (state = initialSate, action) => {
  switch (action.type){
    case 'DEMO_ACTION':
      return{...state,name:action.payload}
    case 'DEMO_ID':
      return{...state,id:action.payload}
    default:
      return state;
  }
}