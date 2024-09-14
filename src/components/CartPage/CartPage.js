import React, { useContext, useState } from "react";
import Header from "./../header/header";
import bgCart from "./../../assets/img/bg_cart.png";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { UilTrashAlt, UilTagAlt } from "@iconscout/react-unicons";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link as RouterLink } from "react-router-dom";
import CartContext from "./CartContext";

function CartPage() {
  const { products, setProducts, dataQuantity, setDataQuantity, userId } =
    useContext(CartContext);

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const Navigate = useNavigate();

  // Hàm xử lý xóa sản phẩm
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/auth/remove-product-cart/${userId}/${productId}`
      );
      toast.success(response.data.message);

      // Cập nhật lại sản phẩm
      const updatedProducts = products.filter(
        (product) => product.product._id !== productId
      );
      setProducts(updatedProducts);

      // Cập nhật lại giá sản phẩm
      const updateTotalPrice = updatedProducts.reduce(
        (total, product) => total + product.product.price * product.quantity,
        0
      );
      setDataQuantity((prevData) => ({
        ...prevData,
        totalPrice: updateTotalPrice,
      }));
    } catch (error) {
      console.error("Lỗi xóa sản phẩm", error);
      toast.error("Xóa sản phẩm thất bại");
    }
  };

  // Hàm xóa nhiều sản phẩm
  const handleDeleteMultipleProducts = async () => {
    if (selectedProductIds.length === 0) {
      toast.error("Vui lòng chọn sản phẩm để xóa");
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/auth/remove-all-products-cart/${userId}`,
        { data: { productIds: selectedProductIds } }
      );
      toast.success(response.data.message);

      // Cập nhật lại danh sách sản phẩm
      const updatedProducts = products.filter(
        (product) => !selectedProductIds.includes(product.product._id)
      );
      setProducts(updatedProducts);

      // Cập nhật lại giá sản phẩm
      const updateTotalPrice = updatedProducts.reduce(
        (total, product) => total + product.product.price * product.quantity,
        0
      );
      setDataQuantity((prevData) => ({
        ...prevData,
        totalPrice: updateTotalPrice,
      }));

      // Xóa ID sản phẩm đã chọn
      setSelectedProductIds([]);
    } catch (error) {
      console.error("Lỗi xóa nhiều sản phẩm", error);
      toast.error("Xóa nhiều sản phẩm thất bại");
    }
  };

  // Hàm xử lý chọn/deselect sản phẩm
  const handleSelectProduct = (productId) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Hàm xử lý tăng số lượng sản phẩm
  const handleIncreaseQuantity = async (productId) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/update-cart-quantity/${userId}/${productId}`;

      // Tìm sản phẩm hiện tại
      const product = products.find((p) => p.product._id === productId);

      // Call API để gửi yêu cầu tăng sản phẩm
      const response = await axios.put(url, {
        quantity: product.quantity + 1,
      });

      // Cập nhật số lượng lên giao diện
      const updatedProducts = products.map((p) =>
        p.product._id === productId ? { ...p, quantity: p.quantity + 1 } : p
      );
      setProducts(updatedProducts);

      // Cập nhật lại giá sản phẩm
      const updateTotalPrice = updatedProducts.reduce(
        (total, p) => total + p.product.price * p.quantity,
        0
      );
      setDataQuantity((prevData) => ({
        ...prevData,
        totalPrice: updateTotalPrice,
      }));
    } catch (error) {
      console.error("Lỗi tăng số lượng sản phẩm", error);
      toast.error("Tăng số lượng sản phẩm thất bại");
    }
  };

  // Hàm xử lý giảm số lượng sản phẩm
  const handleDecreaseQuantity = async (productId) => {
    try {
      // Tìm sản phẩm hiện tại
      const product = products.find((p) => p.product._id === productId);

      // check xem sản phẩm có nhỏ hơn 1 hay không
      if (product.quantity === 1) {
        toast.error("Số lượng sản phẩm không thể nhỏ hơn 1");
        return;
      }

      const url = `${process.env.REACT_APP_API_URL}/auth/update-cart-quantity/${userId}/${productId}`;

      // Call API yêu cầu giảm số lượng sản phẩm
      const response = await axios.put(url, {
        quantity: product.quantity - 1,
      });

      // Cập nhật lại giá tiền lên giao diện
      const updatedProducts = products.map((p) =>
        p.product._id === productId ? { ...p, quantity: p.quantity - 1 } : p
      );
      setProducts(updatedProducts);

      // Cập nhật lại giá sản phẩm
      const updateTotalPrice = updatedProducts.reduce(
        (total, p) => total + p.product.price * p.quantity,
        0
      );
      setDataQuantity((prevData) => ({
        ...prevData,
        totalPrice: updateTotalPrice,
      }));
    } catch (error) {
      console.error("Lỗi giảm số lượng sản phẩm", error);
      toast.error("Giảm số lượng sản phẩm thất bại");
    }
  };

  // Hàm xử lý trở về trang chủ khi giỏ hàng không có sản phẩm
  const handleOut = () => {
    Navigate("/");
  };

  const handlePay = () => {
    Navigate("/pay");
  };

  // Hàm chuyển đổi số thành giá trị tiền tệ
  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  return (
    <>
      <Header />
      {products.length > 0 ? (
        <div className="container py-32 bg-background">
          <div className="flex justify-between w-3/4 pr-4">
            <h2 className="font-bold text-xl">Giỏ hàng</h2>
            <UilTrashAlt
              onClick={handleDeleteMultipleProducts}
              className="cursor-pointer"
            />
          </div>
          <div className="flex py-3">
            <div className="w-3/4">
              <div className="bg-white mr-4 rounded-md">
                <div className="flex justify-between py-3 mx-3 border-b-1">
                  <h2 className="font-medium text-sm">
                    <Checkbox Indeterminate></Checkbox> CÔNG TY CỔ PHẦN THƯƠNG
                    MẠI DỊCH VỤ LL
                  </h2>
                  <p className="text-xs font-medium">Đơn giá</p>
                  <p className="text-xs font-medium">Số lượng</p>
                  <p className="text-xs font-medium">Thành tiền</p>
                </div>
                <div>
                  {products.map((product, index) => (
                    <div key={index} className="flex p-3 border-b-1">
                      <Checkbox
                        checked={selectedProductIds.includes(
                          product.product._id
                        )}
                        onChange={() =>
                          handleSelectProduct(product.product._id)
                        }
                      ></Checkbox>
                      <div className="w-44 h-24">
                        <Link
                          as={RouterLink}
                          to={`/product/productdetails/${product.product._id}/${product.product.name}`}
                        >
                          <img
                            src={`${process.env.REACT_APP_API_URL_IMAGE}/${product.product.image}`}
                            alt=""
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <Link
                          as={RouterLink}
                          to={`/product/productdetails/${product.product._id}/${product.product.name}`}
                        >
                          <p className="w-80 h-9 text-xs  line-clamp-2 hover:text-blue-400">
                            {product.product.descriptionShort}
                          </p>
                        </Link>
                        <p className="text-xs text-title">
                          Thương hiệu{" "}
                          <span className="text-sm text-blue-500">
                            {product.product.brand}
                          </span>
                        </p>
                        <p className="uppercase text-xs font-semibold text-title mt-2">
                          Màu sắc Laptop (filter): Đen
                        </p>
                      </div>
                      <div className="flex justify-between w-full">
                        <p className="font-semibold text-sm ml-3">
                          {formatCurrency(
                            product.product.price * product.quantity
                          )}
                        </p>
                        <div className="border-2 relative flex w-24 h-9 justify-between items-center rounded-md">
                          <button
                            className="text-4xl mb-2 ml-1"
                            onClick={() =>
                              handleDecreaseQuantity(product.product._id)
                            }
                          >
                            -
                          </button>
                          <p className="">{product.quantity}</p>
                          <button
                            className="text-2xl mb-1 mr-1"
                            onClick={() =>
                              handleIncreaseQuantity(product.product._id)
                            }
                          >
                            +
                          </button>
                          <div
                            className="-bottom-10 right-5 absolute flex hover:text-red-500 cursor-pointer "
                            onClick={() =>
                              handleDeleteProduct(product.product._id)
                            }
                          >
                            <UilTrashAlt className="mr-1" />
                            Xóa
                          </div>
                        </div>
                        <p className="font-semibold text-sm">
                          {formatCurrency(
                            product.product.price * product.quantity
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="bg-white p-3 rounded-md">
                <div className="flex justify-between">
                  <h2 className="text-sm font-bold">Khuyến mãi</h2>
                  <div
                    className="flex text-xs items-center text-blue-500 cursor-pointer"
                    onClick={onOpen}
                  >
                    <UilTagAlt className="w-4 mr-1" />
                    Chọn hoặc nhập khuyến mãi
                  </div>
                  <Modal
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    classNames={{
                      backdrop:
                        "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                    }}
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">
                            Khuyến mãi và mã giảm giá
                          </ModalHeader>
                          <ModalBody>
                            <div className="flex gap-3">
                              <Input
                                placeholder="Mã giảm giá/phiếu mua hàng"
                                className="w-3/4"
                              />
                              <Button
                                className="w-1/4"
                                color="primary"
                                variant="ghost"
                              >
                                Áp dụng
                              </Button>
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="light"
                              onPress={onClose}
                            >
                              Close
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </div>
                <p className="text-sm font-normal">
                  Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua
                  thêm để áp dụng
                </p>
              </div>
              <div className="bg-white p-3 mt-3 rounded-md">
                <h2 className="text-sm font-bold">Thanh toán</h2>
                <div className="flex justify-between text-xs my-3">
                  <p>Tổng tạm tính</p>
                  <p>{formatCurrency(dataQuantity.totalPrice)}</p>
                </div>
                <div className="flex justify-between text-xs ">
                  <p>Thành tiền</p>
                  <p className="text-blue-500 font-medium">
                    {formatCurrency(dataQuantity.totalPrice)}
                  </p>
                </div>
                <Button
                  onClick={handlePay}
                  color="primary"
                  variant="ghost"
                  className="w-full mt-3"
                >
                  Tiếp tục
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-32 max-w-96 m-auto">
          <img src={bgCart} alt="" className="" />
          <div className="text-center">
            <p className="mb-4">Giỏ hàng chưa có sản phẩm nào</p>
            <Button color="primary" variant="shadow" onClick={handleOut}>
              Mua sắm ngay
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CartPage;
