//create a delay for testing redux state in jest...
export default function mockApi(delay: number) {
  return new Promise((resolve) => {
    const data: string = "resolved";
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
