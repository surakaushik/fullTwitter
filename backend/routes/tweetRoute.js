import express from "express";
import { createTweet, deleteTweet, getAllTweets, likeOrDislike ,getFollowingTweets} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();

router.route("/create").post(isAuthenticated,createTweet);
router.route("/create").post(isAuthenticated,createTweet);
router.route("/delete/:id").delete(isAuthenticated,deleteTweet);
router.route("/like/:id").put(isAuthenticated,likeOrDislike);
router.route("/getalltweets/:id").get(isAuthenticated, getAllTweets)
router.route("/getfollowingtweets/:id").get(isAuthenticated, getFollowingTweets)

export default router;