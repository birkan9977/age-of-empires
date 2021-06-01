//simulate an api call service with filter options and fetch the filtered data
export default function getData(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        import("../data/age-of-empires-units.json")
          .then((data) => {
            return data.units;
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }, delay);
  });
}
