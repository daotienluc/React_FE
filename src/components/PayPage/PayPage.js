import React, { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import {
  Chip,
  Input,
  Select,
  SelectItem,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { UilTagAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import CartContext from "../CartPage/CartContext";
import provinces from "./../lib/provinces";

export default function PayPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const Navigate = useNavigate();

  const { products, dataQuantity } = useContext(CartContext);

  const handleBackCart = () => {
    Navigate("/cartpage");
  };

  // Hàm chuyển đổi số thành giá trị tiền tệ
  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  return (
    <div>
      <Header />
      <div className="container py-32 bg-background">
        <div className="flex gap-3">
          <div className="w-3/4">
            <div className="bg-white p-5 rounded-md">
              <h2 className="font-bold text-xl">Thông tin người nhận hàng</h2>
              <div className="">
                <Input
                  label="Họ tên"
                  placeholder="Vui lòng nhập họ và tên người nhận"
                  className="my-4"
                  variant="bordered"
                />
                <div className="flex gap-3">
                  <Input
                    variant="bordered"
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                  />
                  <Input
                    variant="bordered"
                    label="Email"
                    placeholder="Nhập email của bạn"
                  />
                </div>
              </div>
              <h2 className="font-bold text-xl mt-5">Địa chỉ nhận hàng</h2>
              <div className="flex gap-3 my-4">
                <Select label="Tỉnh/Thành phố" variant="bordered">
                  {provinces.map((province, index) => (
                    <SelectItem
                      key={index}
                      value={province.name}
                      textValue={province.name}
                    >
                      {province.name}
                    </SelectItem>
                  ))}
                </Select>

                <Select label="Quận/Huyện" variant="bordered">
                  <SelectItem></SelectItem>
                </Select>
              </div>
              <div className="flex gap-3">
                <Select label="Phường/Xã" variant="bordered">
                  <SelectItem></SelectItem>
                </Select>
                <Input
                  label="Địa chỉ cụ thể"
                  placeholder="Số nhà, ngõ, tên đường..."
                  variant="bordered"
                ></Input>
              </div>

              <h2 className="font-bold text-xl mt-5">
                Chọn phương thức thanh toán
              </h2>
              <p className="text-sm">
                Thông tin thanh toán của bạn sẽ luôn được bảo mật
              </p>
              <div className="flex justify-evenly mt-4">
                <div className="flex border-2 p-5 rounded-md active:border-blue-500 cursor-pointer">
                  <h2 className="font-bold mr-2">Thanh toán VNPAY-QR</h2>
                  <Chip size="sm" color="primary" variant="shadow">
                    Khuyên dùng
                  </Chip>
                </div>
                <p className=" border-2 py-5 px-14 font-bold rounded-md active:border-blue-500 cursor-pointer">
                  Thanh toán khi nhận hàng
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="bg-white p-5 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-lg">Thông tin đơn hàng</h2>
                <p
                  onClick={handleBackCart}
                  className="text-xs text-blue-400 cursor-pointer"
                >
                  Chỉnh sửa
                </p>
              </div>
              {products.map((product, index) => (
                <div className="flex my-3">
                  <div className="w-20 h-20 mr-2 ">
                    <img
                      src={`${process.env.REACT_APP_API_URL_IMAGE}/${product.product.image}`}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-xs font-medium line-clamp-2">
                      {product.product.descriptionShort}
                    </p>
                    <p className="text-xs">Số lượng: {product.quantity}</p>
                    <p className="font-medium">
                      {formatCurrency(product.product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-5 my-3 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-base">Khuyến mãi</h2>
                <p
                  onClick={onOpen}
                  className="text-xs flex items-center text-blue-400 cursor-pointer"
                >
                  <UilTagAlt className="w-4 mr-1" />
                  Chọn hoặc nhập khuyến mãi
                </p>
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
            </div>
            <div className="bg-white p-5 rounded-md">
              <div className="flex justify-between items-center text-xs">
                <p>Tổng tạm tính</p>
                <p>{formatCurrency(dataQuantity.totalPrice)}</p>
              </div>
              <div className="flex justify-between items-center text-xs my-2">
                <p>Phí vận chuyển</p>
                <p>0đ</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs">Thành tiền</p>
                <p className="font-medium text-red-500">
                  {formatCurrency(dataQuantity.totalPrice)}
                </p>
              </div>
              <div className="flex justify-end">
                <p className=" text-xs">(Đã bao gồm VAT)</p>
              </div>
              <Button color="primary" variant="ghost" className="w-full mt-3">
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
