exports.productCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product created successfully",
  });
};

exports.productRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product read successfully",
  });
};

exports.productDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

exports.productUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
  });
};
