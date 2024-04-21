import { ModelType } from "@prisma/client";

export interface ItemModel {
  id?: string;
  name: string;
  image: Buffer;
  type: ModelType;
}
