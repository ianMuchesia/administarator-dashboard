import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    cost: String,
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product"
      }
    ]
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
