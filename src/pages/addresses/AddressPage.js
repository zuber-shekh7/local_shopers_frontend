import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import { deleteAddress, getAddress } from "../../actions/addressActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import ModalForm from "../../components/shared/ModalForm";

const AddressPage = ({ match }) => {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const { loading, error, address } = useSelector((state) => state.getAddress);
  const { success } = useSelector((state) => state.deleteAddress);

  const { address_id } = match.params;

  useEffect(() => {
    dispatch(getAddress(address_id));
  }, []);

  const onDelete = (id) => {
    dispatch(deleteAddress(id));
    setModalShow(false);
  };

  if (success) {
    return <Redirect to="/users/addresses" />;
  }
  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              {loading && <Loader />}
              {error && <Message>{error}</Message>}

              {address && (
                <>
                  <ModalForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={"Are you sure?"}
                    subject={`Do you really want to delete ${address.fullName} ???`}
                    message={"Once you delete you won't be able to access it."}
                    onAccept={() => onDelete(address._id)}
                  />
                  <Card>
                    <Card.Body>
                      <Card.Title>{address.fullName}</Card.Title>
                      <p>
                        {address.flatNo} {address.street}
                        {address.landmark}
                      </p>
                      <p>
                        {address.city}, {address.state}, {address.pincode}
                      </p>
                      <p>Phone Number: {address.mobileNumber}</p>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <LinkContainer
                        to={`/users/addresses/${address._id}/edit`}
                      >
                        <Button className="w-100 me-2">Edit</Button>
                      </LinkContainer>
                      <Button
                        onClick={() => setModalShow(true)}
                        variant="danger"
                        className="w-100"
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                </>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AddressPage;
