//a helper function to find the parent element including a specific prefix in id tag

export function findParentId(
  evt: React.ChangeEvent<HTMLInputElement>,
  prefix: string
) {
  if (!evt) return null;
  let count: number = 0;
  let elementId: string = "";
  const id: string | null = recursiveIdFinder(evt.target);
  return id;
  function recursiveIdFinder(elem: any): string | null {
    if (!elem) return null;
    count++;
    if (elem.id.indexOf(prefix) > -1) {
      elementId = elem.id;
      return elementId;
    }
    if (count > 10) {
      return null;
    } else {
      return recursiveIdFinder(elem.parentElement);
    }
  }
}
