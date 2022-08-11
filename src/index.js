
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined) {
    return []
  }

  else {
  const sorted =  matrix.reduce((acc, cur, i) => {
   return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, []);;
  return sorted 
};};

