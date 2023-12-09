import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

export const initMongoDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri)

      console.info('🎉 connected to database successfully')
    }
  } catch (error) {
    console.error(error)
  }
}
