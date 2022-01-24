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
import { getWishList, removeFromWishList } from "../../actions/wishListActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const WishListPage = () => {
  const { loading, error, wishList } = useSelector(
    (state) => state.getWishList
  );

  const { removeLoading, removeError, success } = useSelector(
    (state) => state.removeFromWishList
  );

  const { userInfo } = useSelector((state) => state.userLogin);
  const { user } = userInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishList(user._id));
  }, [success]);

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
              {removeLoading || (loading && <Loader />)}
              {removeError ||
                (error && (
                  <Message variant="danger">{removeError || error}</Message>
                ))}
              {wishList && wishList.products && wishList.products.length > 0 ? (
                <ListGroup>
                  {wishList.products.map((product) => {
                    return (
                      <Card key={product._id} className="my-3">
                        <Card.Body>
                          <Row>
                            <Col md={3}>
                              <Image
                                rounded
                                fluid
                                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                              />
                            </Col>
                            <Col className="my-auto">
                              <Card.Title as="h3">{product.name}</Card.Title>
                            </Col>
                            <Col className="my-auto" md={2}>
                              <LinkContainer
                                to={`/sellers/manage/products/${product._id}`}
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
