import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("Users");
    const admins = await db.collection("Admins").find({}).toArray();

    res.status(200).json( admins );
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err);
  }
}
