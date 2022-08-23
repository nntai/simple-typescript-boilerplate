interface Item {
  name: string,
  id: number
}

export default (item: Item) => {
  return item.id;
};
