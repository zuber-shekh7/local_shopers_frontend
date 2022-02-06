import React, { useEffect, useState, useRef } from "react";

import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBusiness } from "../../actions/businessActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessDetailPage = ({ history }) => {
  const [copied, setCopied] = useState(false);

  const dispatch = useDispatch();
  const storeLink = useRef();

  const { seller } = useSelector((state) => state.getSeller);

  const { business, loading, error } = useSelector(
    (state) => state.getBusiness
  );

  useEffect(() => {
    if (!seller.business) {
      history.push("/sellers/dashboard");
    } else {
      dispatch(getBusiness(seller.business._id));
    }
  }, []);

  let onlineStoreLink = window.location.origin;

  if (seller.business) {
    onlineStoreLink = `${window.location.origin}/business/${seller.business._id}`;
  }

  const copyToClipboard = () => {
    setCopied(true);
    storeLink.current.select();
    document.execCommand("copy");
    setInterval(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={6} className="mx-auto mb-3">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {business && (
              <section>
                <Row>
                  <Col>
                    <Image
                      src={business.image}
                      alt={business.name}
                      fluid
                      rounded
                    />
                    <h1 className="text-center my-3">{business.name}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ListGroup>
                      <ListGroup.Item>
                        <Row>
                          <Col>Business Name</Col>
                          <Col className="text-end">{business.name}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Description</Col>
                          <Col className="text-end">{business.description}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Business Category</Col>
                          <Col className="text-end">
                            {business.category.name}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Last Modified</Col>
                          <Col className="text-end">{business.updatedAt}</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <section className="d-flex justify-content-between my-3">
                  <LinkContainer
                    to={`/sellers/manage/business/${business._id}/edit`}
                  >
                    <Button className="w-100">Edit</Button>
                  </LinkContainer>
                </section>
                <FormControl
                  type="text"
                  placeholder="Your online store link"
                  defaultValue={onlineStoreLink}
                  ref={storeLink}
                ></FormControl>
                <Button onClick={copyToClipboard} className="w-100 my-3 ">
                  {copied ? "Copied!" : "Copy online store link"}
                </Button>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessDetailPage;
