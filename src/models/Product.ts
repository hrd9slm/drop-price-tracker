import mongoose, { Document, Schema } from 'mongoose';

interface IPriceHistory extends Document {
  date: Date;
  price: number;
}

interface IProduct extends Document {
  name: string;
  url: string;
  currentPrice: number;
  priceHistory: IPriceHistory[];
  createdAt: Date;
}

const PriceHistorySchema: Schema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  priceHistory: [PriceHistorySchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
