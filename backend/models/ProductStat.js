
import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    product: {
        type:mongoose.Schema.ObjectId,
        ref:"Product",
    },
    yearlySalesTotal: {
      type: Number,
      required: true,
    },
    yearlyTotalSoldUnits:  {
      type: Number,
      required: true,
    },
    year: Number,
      monthlyData: [
      {
        month: {
          type: String,
          required: true,
        },
        totalSales: {
          type: Number,
          required: true,
        },
        totalUnits: {
          type: Number,
          required: true,
        },
      },
    ],
    dailyData: [
      {
        date: {
          type: String,
          required: true,
        },
        totalSales: {
          type: Number,
          required: true,
        },
        totalUnits: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;

