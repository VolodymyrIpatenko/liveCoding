///input object, arr
///output object
const favourites = ['id-3'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};
const markFavourites = (tree, favourites) => {
  const isFavourite = favourites.includes(tree.id);

  return {
    ...tree,
    isFavourite,
    nodes: tree.nodes.map(childNode => markFavourites(childNode, favourites)),
  };
};

const result = markFavourites(tree, favourites);
console.log(result);

function sumInRange(x, y) {
  const arr = [x, y];
  const numCount = Math.abs(x - y) + 1;
  const sum = ((x + y) * numCount) / 2;
  return sum;
}
console.log(sumInRange(1, 3));
