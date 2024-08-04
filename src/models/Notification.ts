import mongoose, { Schema, Document } from 'mongoose';


interface INotification extends Document {
  user: mongoose.Types.ObjectId; 
  product: mongoose.Types.ObjectId; 
  oldPrice: number; 
  newPrice: number; 
  sentAt: Date; 
}

const notificationSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});


const Notification = mongoose.models.Notification || mongoose.model<INotification>('Notification', notificationSchema);

export default Notification;
