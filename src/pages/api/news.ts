import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
    try{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95465d70701f49e29d2008488ac131ee");
      if(response.status === 200){ 
        return res.status(200).json(response.data.articles)
      }
      return res.status(500).json({ error: response.data })
    }
    catch(err){
      return res.status(500).json({ error: err })
    }
  }