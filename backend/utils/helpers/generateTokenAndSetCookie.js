import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	console.log("userId: ", userId);
	const token = jwt.sign({ userId }, 'hello', {
		expiresIn: "15d",
	});

	console.log("token: ", token);

	res.cookie("jwt", token, {
		httpOnly: true, // more secure
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		sameSite: "strict", // CSRF
	});

	return token;
};

export default generateTokenAndSetCookie;
