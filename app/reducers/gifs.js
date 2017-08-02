const reducer = (state = {gifs : [], gifsLoaded : false,gifsRefresh:false} ,action) => {
  switch(action.type){
      case 'GET_ALL_GIFS':
          return {
              ...state,
              gifs : action.data,
              gifsLoaded : true,
              gifsRefresh: false
          };
      case 'REFRESH_GIFS' :
          return {
              ...state,
              gifsRefresh : true,
              gifsLoaded : false
          };
      default:
          return state;
  }
};

export default reducer;
