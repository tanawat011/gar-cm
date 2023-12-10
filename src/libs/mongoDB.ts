import mongoose from 'mongoose'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI

export const initMongoDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri, {
        autoIndex: true,
      })

      console.info('🎉 connected to database successfully')
    }
  } catch (error) {
    console.error(error)
  }
}
