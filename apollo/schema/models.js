import mongoose from 'mongoose';

export const Page = mongoose.model('pages', mongoose.Schema({
  title: String,
  data: String,
  components: Array,
}));

export const Component = mongoose.model('components', mongoose.Schema({
  title: String,
  type: String,
  props: String,
  children: Array,
  content: String,
}));