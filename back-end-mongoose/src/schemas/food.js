import joi from 'joi'

export const foodSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  des: joi.string().required(),
  imageUrl: joi.string().required(),
  realPrice: joi.number().required(),
  cookTime: joi.string().required(),
})