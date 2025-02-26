import managerModel from "../models/managerModel.js";

// Fetch all futsal locations
const getFutsalLocations = async (req, res) => {
  try {
    const futsals = await managerModel.find({}); // Fetch all futsals from MongoDB
    res.status(200).json({ success: true, futsals });
  } catch (error) {
    console.error("Error fetching futsal locations:", error);
    res.status(500).json({ success: false, message: "Error fetching data" });
  }
};

export { getFutsalLocations };
