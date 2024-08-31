import React from "react";
import Header from "./../header/header";
import laptopgaming from "./../../assets/img/laptopgaming01.jpg";
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

function CartPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Header />
      <div className="container py-32 bg-background">
        <div className="flex justify-between w-3/4 pr-4">
          <h2 className="font-bold text-xl">Giỏ hàng</h2>
          <UilTrashAlt className="cursor-pointer" />
        </div>
        <div className="flex py-3">
          <div className="w-3/4">
            <div className="bg-white mr-4 rounded-md">
              <div className="flex justify-between py-3 mx-3 border-b-1">
                <h2 className="font-medium text-sm">
                  <Checkbox Indeterminate></Checkbox> CÔNG TY CỔ PHẦN THƯƠNG MẠI
                  DỊCH VỤ LL
                </h2>
                <p className="text-xs font-medium">Đơn giá</p>
                <p className="text-xs font-medium">Số lượng</p>
                <p className="text-xs font-medium">Thành tiền</p>
              </div>
              <div>
                <div className="flex p-3">
                  <Checkbox Indeterminate></Checkbox>
                  <img src={laptopgaming} alt="" className="w-24 border-2" />
                  <div className="ml-3">
                    <p className="w-80 h-9 text-xs  line-clamp-2">
                      Máy tính xách tay/ Laptop HP Victus 15-fa1139TX - 8Y6W3PA
                      (i5-12450H) (Đen) ính xách tay/ Laptop HP ính xách tay/
                      Laptop HP
                    </p>
                    <p className="text-xs text-title">
                      Thương hiệu{" "}
                      <span className="text-sm text-blue-500">ACER</span>
                    </p>
                    <p className="uppercase text-xs font-semibold text-title mt-2">
                      Màu sắc Laptop (filter): Đen
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-semibold text-sm">17.990.000đ</p>
                    <div className="border-2 flex w-24 h-9 justify-between items-center rounded-md">
                      <button className="text-4xl mb-2 ml-1">-</button>
                      <p className="">1</p>
                      <button className="text-2xl mb-1 mr-1">+</button>
                    </div>
                    <p className="font-semibold text-sm">17.990.000đ</p>
                  </div>
                </div>
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
                Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua thêm
                để áp dụng
              </p>
            </div>
            <div className="bg-white p-3 mt-3 rounded-md">
              <h2 className="text-sm font-bold">Thanh toán</h2>
              <div className="flex justify-between text-xs my-3">
                <p>Tổng tạm tính</p>
                <p>22.590.000₫</p>
              </div>
              <div className="flex justify-between text-xs ">
                <p>Thành tiền</p>
                <p className="text-blue-500 font-medium">22.590.000₫</p>
              </div>
              <Button color="primary" variant="ghost" className="w-full mt-3">
                Tiếp tục
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
