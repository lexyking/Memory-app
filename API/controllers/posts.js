import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
    
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  console.log('creating the post')
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const {id: _id} = req.params
  if(!mongoose.Types.ObjectId.isValid()) res.status(404).send('This post does not exist')
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
  res.json(updatePost)
}