//a helper function to find the parent element including a specific prefix in id tag

export function findParentId(
  evt: React.ChangeEvent<HTMLInputElement>,
  prefix: string
) {
  //console.log("helper", e, prefix);
  if (!evt) return "not found";
  let count: number = 0;
  let elementId: string = "";
  const id: string = recursiveIdFinder(evt.target);
  return id;
  function recursiveIdFinder(elem: any): string {
    if (!elem) return "not found";
    count++;
    if (elem.id.indexOf(prefix) > -1) {
      elementId = elem.id;
      //console.log(elem.id);
      //console.log("elementId", elementId);
      return elementId;
    }
    if (count > 10) {
      //console.log(elem.nodeName, count, "not found!");
      return "not found";
    } else {
      //console.log(count);
      return recursiveIdFinder(elem.parentElement);
    }
  }
}
