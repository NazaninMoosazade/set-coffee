import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },          // موضوع مقاله
  content: { type: String, required: true },        // متن مقاله
  tags: { type: [String], default: [] },           // برچسب‌ها (اختیاری)
  img: { type: String, required: true },           // مسیر عکس
  createdAt: { type: Date, default: Date.now },    // تاریخ ایجاد
});

const ArticleModel =
  mongoose.models.Article || mongoose.model("Article", schema);

export default ArticleModel;
