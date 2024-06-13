// routes/generateRoute.js
const express = require("express");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");
const { isURL } = require("validator");

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { url, honeyPot } = req.body;

  if (honeyPot) {
    return res.status(400).json({ error: "Bot detected" });
  }

  if (!url || !isURL(url, { require_protocol: true })) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    const qrCodePath = path.join(__dirname, "../qrcode.png");
    await QRCode.toFile(qrCodePath, url);

    res.download(qrCodePath, "qrcode.png", (err) => {
      if (err) {
        res.status(500).json({ error: "Error generating QR code" });
      }
      fs.unlinkSync(qrCodePath);
    });
  } catch (err) {
    res.status(500).json({ error: "Error generating QR code" });
  }
});

module.exports = router;
