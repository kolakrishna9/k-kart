export const shorten = (title) => {
  const splittedTitle = title.split(" ");
  if (splittedTitle[1] === "-") {
    return `${splittedTitle[0]} ${splittedTitle[2]}`;
  } else {
    return `${splittedTitle[0]} ${splittedTitle[1]}`;
  }
};

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export const itemCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if(index ===-1){
    return false
  }else{
    return state.selectedItems[index].quantity
  }
};
