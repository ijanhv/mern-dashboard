import OverallStat from "../models/OverallStat";

export const getOverallStats = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(200).json(overallStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
