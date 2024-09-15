import User from "../models/user.model.js";
import { getCompatiblePersonalities1, getCompatiblePersonalities2 } from "../utils/compatiblityChart.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};


export const getCompatibleUsersForSidebar = async (req, res) => {
	try{
		const loggedInUserId = req.user._id;
		const loggedInUser = await User.findOne({ _id : loggedInUserId });
		const perType = loggedInUser.personalityType;
		let compatibleTypes = getCompatiblePersonalities1(perType);
		let filteredUsers = await User.find({  _id: { $ne: loggedInUserId }, personalityType: { $in : compatibleTypes }}).select("-password");
		
		if(filteredUsers.length < 3){
			compatibleTypes = compatibleTypes.concat(getCompatiblePersonalities2(perType));
			filteredUsers = await User.find({  _id: { $ne: loggedInUserId }, personalityType: { $in : compatibleTypes }}).select("-password");
		}
		console.log(filteredUsers);
		console.log(compatibleTypes);
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}
