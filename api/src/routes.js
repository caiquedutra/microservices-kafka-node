import express from "express";

const router = express.Router();

router.post("/certification", (req, res) => {
    res.json({ ok: true })
})

export default router;