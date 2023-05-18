import { StatusCodes } from "http-status-codes";
import OverallStat from "../models/OverallStat.js";

 const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(StatusCodes.OK).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export {getSales}
