import mongoose, { Document, Schema } from "mongoose";

interface ICategory extends Document {
  name: string;
  parent?: mongoose.Types.ObjectId;
  path: string;
}

const categorySchema: Schema<ICategory> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    path: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);

export { Category, ICategory };
