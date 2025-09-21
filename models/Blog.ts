import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  keywords: string[];
  seoScore?: number;
  author: string;
  status: "draft" | "published";
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  keywords: [{ type: String }],
  seoScore: { type: Number },
  author: { type: String, default: "AI-Agent" },
  status: { type: String, enum: ["draft", "published"], default: "draft" },
});

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
