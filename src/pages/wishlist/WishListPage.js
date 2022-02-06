import React from "react";
import { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Card,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "../../actions/wishListActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const WishListPage = ({ match }) => {
  const { loading, error, wishList } = useSelector((state) => state.wishList);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { user } = userInfo;

  const { product_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishList(user._id));
  }, []);

  useEffect(() => {
    if (product_id && wishList) {
      dispatch(addToWishList(wishList._id, product_id));
    }
  }, [product_id]);

  const handleRemoveFromList = (wish_list_id, product_id) => {
    dispatch(removeFromWishList(wish_list_id, product_id));
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2>Your Wishlist</h2>
              <hr />
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {wishList && wishList.products && wishList.products.length > 0 ? (
                <ListGroup>
                  {wishList.products.map((product) => {
                    return (
                      <Card key={product._id} className="my-3">
                        <Card.Body>
                          <Row>
                            <Col md={3}>
                              <Image rounded fluid src={product.image} />
                            </Col>
                            <Col className="my-auto">
                              <Card.Title as="h3">{product.name}</Card.Title>
                            </Col>
                            <Col className="my-auto" md={2}>
                              <LinkContainer
                                to={`/business/products/${product._id}`}
                              >
                                <Button className="w-100">View more</Button>
                              </LinkContainer>

                              <Button
                                onClick={() =>
                                  handleRemoveFromList(
                                    wishList._id,
                                    product._id
                                  )
                                }
                                variant="danger my-3 w-100"
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </ListGroup>
              ) : (
                <h3 className="text-center text-muted">
                  No products added to wishlist
                </h3>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default WishListPage;
