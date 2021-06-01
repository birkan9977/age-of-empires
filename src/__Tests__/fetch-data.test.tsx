import getData from "../services/service";
type Data = {
  id: number;
  name: string;
};

describe("Fetch Data", () => {
  test("Fetches Data and outputs the number of items", () => {
    return getData(100).then((data: Data[] | any) => {
      expect(data.length as number).toBe(104);
    });
  });

  test("data testing", () => {
    return getData(0).then((data: Data[] | any) => {
      expect(data[0].name as string).toEqual("Archer");
      expect(data[103].age as string).toEqual("Imperial");
      expect(data[40]).toHaveProperty("age");
    });
  });
});
