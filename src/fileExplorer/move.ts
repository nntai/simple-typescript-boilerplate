interface Item {
  name: string,
  id: number
}

const move = (item: Item): number => {
  return item.id;
};

export default move;

