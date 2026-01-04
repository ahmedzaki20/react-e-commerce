import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import { removeCart, clearCart } from "../store/slices/addToCartSlice";
function Cart() {
  const cartProducts = useSelector((status) => status.cart);
  const Swal = require("sweetalert2");
  const totalPrice = cartProducts.reduce((total, item) => {
    return (total += item.price * item.qty);
  }, 0);
  //
  const sweatAl = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your sure you want to clear cart.", "success");
        dispatch(clearCart());
      }
    });
  };
  const dispatch = useDispatch();
  return (
    <>
      <Container className="pt-5">
        <h1 className="mt-3">Cart Products</h1>
        <h3>Total price : {totalPrice.toFixed(2)}$</h3>
        <Button
          size="lg"
          variant="outline-danger"
          onClick={() => {
            sweatAl();
          }}
        >
          Clear
        </Button>
        <Table striped bordered hover className="mt-5">
          <thead className="">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price} $</td>
                  <td>{product.qty}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        dispatch(removeCart(product));
                      }}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default Cart;
