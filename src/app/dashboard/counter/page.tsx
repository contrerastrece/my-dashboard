
import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "un simple contador",
};

const CounterPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span className="">Procucto en el Carrito</span>

      <CartCounter value={100} />
    </div>
  );
};

export default CounterPage;
