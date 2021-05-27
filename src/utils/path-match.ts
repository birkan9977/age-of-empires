const pathMatch = (path:string, windowLocation:string):boolean => {
  //console.log("PATH", path);
  //console.log("windowLocation", windowLocation);

  const regex = new RegExp(`/${path}`, "gi");
  const found = windowLocation.search(regex) > -1;
  //console.log(path, "found", found);
  return found;
};
export default pathMatch;
