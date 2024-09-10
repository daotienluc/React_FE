import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const DynamicDescriptionInput = ({ description, setDescription }) => {
  const addDescription = () => {
    setDescription([...description, ""]);
  };

  const removeDescription = (index) => {
    setDescription(description.filter((_, i) => i !== index));
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = description.map((desc, i) =>
      i === index ? value : desc
    );
    setDescription(updatedDescriptions);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={addDescription}
        icon={<PlusOutlined />}
        style={{ marginBottom: "10px" }}
      >
        Thêm mô tả
      </Button>
      <Space direction="vertical" style={{ width: "100%" }}>
        {description.map((desc, index) => (
          <Space key={index} style={{ display: "flex", width: "100%" }}>
            <Input
              placeholder={`Mô tả ${index + 1}`}
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <Button
              type="danger"
              icon={<MinusOutlined />}
              onClick={() => removeDescription(index)}
            />
          </Space>
        ))}
      </Space>
    </div>
  );
};

export default DynamicDescriptionInput;
