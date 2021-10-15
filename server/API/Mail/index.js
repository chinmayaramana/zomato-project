import express from "express";
import mailgun from "mailgun-js";

import { initailizeMailgun } from "../../Config/mail.config";

const router = express.Router();

/*
ROUTE       /
des         send Mail   
params      none
Access      Public  
Method      Post
body        from ,to , subject ,text
*/
router.post("/", async (req, res) => {
  try {
    const { from, to, subject, text } = req.body.mailData;

    const sendMail = initailizeMailgun();

    await sendMail.messages().send({ from, to, subject, text });

    res.status(200).json({ status: "success sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
