import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const foodSchema = new mongoose.Schema({
  
  name: {
    type: String
  },
  price: {
    type: Number,
  },
  des: {
    type: String,
  },
  imageUrl: {
    type: String
  },
  realPrice: {
    type: Number,
  },
  cookTime:{
    type: String,
  },
  
},{timestamps: true,versionKey: false})

foodSchema.plugin(mongoosePaginate)

export default mongoose.model("Food", foodSchema)