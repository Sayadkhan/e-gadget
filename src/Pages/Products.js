import Card from "../Components/Card";

const Products = () => {
  return (
    <div className="products-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Browse all Products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
