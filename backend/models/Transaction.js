import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    cost:{
      type: String,
      required: true,
    },

    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required:true,
      }
    ]
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
