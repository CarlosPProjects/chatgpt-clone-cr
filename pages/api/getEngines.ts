import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOption: Option[];
};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOption = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));
  res.status(200).json({
    modelOption,
  });
};

export default handler;
