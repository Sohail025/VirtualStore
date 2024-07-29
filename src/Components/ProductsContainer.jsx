import ListProduct from "./ListProduct";

export const ProductsContainer = () => {
  return (
    <div className="mx-10 mt-8">
      <h1 className="text-[1.5rem] font-semibold">Buy What you want</h1>
      <br></br>
      <div className="grid grid-cols-4 gap-5">
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
      </div>
    </div>
  );
};
export default ProductsContainer;
