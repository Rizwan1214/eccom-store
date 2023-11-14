import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { getRequestMethod, deleteRequestMethod } from "../services/Api";
import AddProductForm from "./AddProductForm";
import { search } from "../Context";

const FeatureProducts = () => {
  const [productContent, setProductContent] = useState([]);
  const [products, setProducts] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [updatePro, setUpdatePro] = useState({});
  const [submit, setSubmit] = useState("submit");
  const searchDataValue = useContext(search);
  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    setProductContent(() => {
      if (searchDataValue?.searchValue) {
        return products.filter((data) =>
          data.productName.toLowerCase().includes(searchDataValue?.searchValue)
        );
      } else {
        return products;
      }
    });
  }, [searchDataValue]);

  const fetchProductData = async () => {
    try {
      const result = await getRequestMethod(
        // searchDataValue?.searchValue
        //   ? `/productList?productName=${searchDataValue?.searchValue}`
        "/productList"
      );
      if (result.status === 200) {
        setProductContent(result.data);
        setProducts(result.data);
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteRequestMethod(`/productList/${id}`);
      console.log(response);
      if (response.status === 200) {
        setProductContent((prev) => prev.filter((data) => data?.id !== id));
      } else {
        console.error("DELETE request failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const handleEdit = (product) => {
    setUpdatePro(product);
    setSubmit("Update");
    setShowForm(true);
  };
  return (
    <div className="FeatureProducts my-5">
      {showForm && (
        <div
          className="productModal d-flex justify-content-center align-items-center position-fixed top-0 start-0 bottom-0 end-0 bg-dark bg-opacity-50"
          style={{ zIndex: 99 }}
        >
          <AddProductForm
            setProductContent={setProductContent}
            setShowForm={setShowForm}
            setUpdatePro={setUpdatePro}
            updatePro={updatePro}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>
      )}

      <Container>
        <div className="btnWrapper text-end">
          <Button
            className="mb-3"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add Products
          </Button>
        </div>

        <Row>
          {productContent.map((product, index) => {
            return (
              <Col lg={4} md={6} key={index}>
                <Card style={{ marginBottom: "20px", position: "relative" }}>
                  <Button
                    style={{
                      width: "50px",
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                    }}
                    onClick={() => handleDelete(product.id)}
                  >
                    Del
                  </Button>
                  <Button
                    style={{
                      width: "53px",
                      position: "absolute",
                      right: "70px",
                      top: "10px",
                    }}
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                  <Card.Img
                    variant="top"
                    src={product.productImg}
                    style={{ width: "100%", height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>{product.productDescription}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Card.Text className="fw-bold m-0">Price</Card.Text>
                    <Card.Text className="fw-bold m-0">
                      {product.productPrice}PKR
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureProducts;
