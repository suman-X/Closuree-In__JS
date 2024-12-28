function returnFunc() {
  const x = () => {
    let a = 100;
    console.log(a);
    const y = () => {
    //   let a = 200;
      console.log(a);
      const z = () => {
        // let a = 300;
        console.log(a);
      };
      z()
    };
    a = 999;
    y();
  };
  return x;
}
let b = returnFunc();
b();
