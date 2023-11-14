import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { postRequestMethod, putRequestMethod } from "../services/Api";
const AddProductForm = (props) => {
  const {
    setShowForm,
    updatePro,
    submit,
    setSubmit,
    setProductContent,
    setUpdatePro,
  } = props;

  const [productData, setProductData] = useState({
    productImg: "",
    productName: "",
    productDescription: "",
    productPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProductData({ ...productData, productImg: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitProduct = async () => {
    console.log("Submit product");

    try {
      const response = await postRequestMethod("/productList", productData);
      console.log(response);

      if (response.status === 201) {
        setProductContent((prev) => [...prev, productData]);
        console.log("POST request successful. Response data:", response);
        setShowForm(false);
      } else {
        console.error("POST request failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    if (updatePro && Object.keys(updatePro)?.length > 0)
      setProductData({
        ...productData,
        productImg: updatePro?.productImg,
        productName: updatePro?.productName,
        productDescription: updatePro?.productDescription,
        productPrice: updatePro?.productPrice,
      });
    console.log(updatePro);
  }, [updatePro]);

  const updateProduct = async (id) => {
    console.log("Update product");
    console.log(id);
    try {
      const response = await putRequestMethod(
        `/productList/${id}`,
        productData
      );
      console.log(response);
      if (response.status === 200) {
        console.log("POST request successful. Response data:", response);
        setProductContent((prev) => {
          return prev.map((item) => {
            if (item.id === id) {
              return { ...item, ...productData };
            }
            return item;
          });
        });
        setUpdatePro({});
        setShowForm(false);
        setSubmit("submit");
      } else {
        console.error("POST request failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="AddProductForm shadow-lg p-3 bg-white rounded col-4">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submit === "submit" ? submitProduct() : updateProduct(updatePro.id);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>productImg</Form.Label>

          {productData.productImg ? (
            <div style={{ position: "relative" }}>
              <Button
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                onClick={() =>
                  setProductData({ ...productData, productImg: "" })
                }
              >
                X
              </Button>
              <img
                src={productData.productImg}
                alt="images/product"
                height="150"
                className="w-100"
              />
            </div>
          ) : (
            <Form.Control
              type="file"
              placeholder="productImg"
              name="productImg"
              onChange={handleImageChange}
            />
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>productName</Form.Label>
          <Form.Control
            type="text"
            placeholder="product Name"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>productDescription</Form.Label>
          <Form.Control
            type="text"
            placeholder="productDescription"
            name="productDescription"
            value={productData.productDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>productPrice</Form.Label>
          <Form.Control
            type="text"
            placeholder="productPrice"
            name="productPrice"
            value={productData.productPrice}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {submit}
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
