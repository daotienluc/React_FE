// components/ProductCard.js
import React from "react";
import { Card, Chip, Button } from "@nextui-org/react";

const ProductCardAdmin = ({ product, deleteProduct, handleChangeStatus }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg shadow-sm bg-white p-4 max-w-full break-words">
      <div className="absolute top-1 right-2">
        {product.status === "Active" ? (
          <Chip color="success">Kích hoạt</Chip>
        ) : product.status === "Hidden" ? (
          <Chip color="warning">Chưa kích hoạt</Chip>
        ) : product.status === "Delete" ? (
          <Chip color="danger">Chờ Xóa</Chip>
        ) : null}
      </div>

      <div className="bg-white w-full">
        {product.image && (
          <img
            src={`${process.env.REACT_APP_API_URL_IMAGE}/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="flex justify-between flex-col h-48">
          <h6 className="text-sm font-semibold text-title my-3 line-clamp-2">
            Tên sản phẩm: {product.name}
          </h6>
          <p className="text-xs line-clamp-3 h-12">
            Mô tả sản phẩm: {product.descriptionShort}
          </p>
          <p className="text-xs line-clamp-3 h-12">
            Mô tả sản phẩm: {product.description}
          </p>
          <p className="font-bold text-xs text-black">
            Giá khuyến mãi: {product.discount}
          </p>
          <p className="font-bold text-blue-600 mt-2">
            Giá sản phẩm: {product.price}đ
          </p>
        </div>
        <div>
          <Button onClick={() => deleteProduct(product._id)}>
            Xóa sản phẩm
          </Button>
        </div>
      </div>

      <div className="flex justify-between py-3">
        <div>
          {product.status === "Delete" ? (
            <Button
              color="primary"
              variant="solid"
              onClick={() => handleChangeStatus(product._id, "Hidden")}
            >
              Khôi phục
            </Button>
          ) : (
            <>
              {product.status === "Hidden" ? (
                <>
                  <Button
                    color="primary"
                    variant="solid"
                    onClick={() => handleChangeStatus(product._id, "Active")}
                  >
                    Kích hoạt
                  </Button>
                  <Button
                    color="danger"
                    variant="solid"
                    onClick={() => handleChangeStatus(product._id, "Delete")}
                  >
                    Xóa
                  </Button>
                </>
              ) : product.status === "Active" ? (
                <>
                  <Button
                    color="warning"
                    variant="solid"
                    onClick={() => handleChangeStatus(product._id, "Hidden")}
                  >
                    Ẩn
                  </Button>
                  <Button
                    color="danger"
                    variant="solid"
                    onClick={() => handleChangeStatus(product._id, "Delete")}
                  >
                    Xóa
                  </Button>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
