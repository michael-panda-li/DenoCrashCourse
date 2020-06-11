const middleware = ({}, next: any) => {
  console.log("hello middleware");
  return next();
}

export default middleware;