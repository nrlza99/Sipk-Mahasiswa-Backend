import express from "express";

import {
  getKegiatan,
  getKegiatanById,
  createPengajuanKegiatan,
  getPengajuanSaya
} from "../controllers/KegiatanController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Mahasiswa melihat kegiatan yang sudah disetujui
router.get("/kegiatan", getKegiatan);

// Mahasiswa melihat detail kegiatan
router.get("/kegiatan/:id", getKegiatanById);

// Mahasiswa mengajukan kegiatan baru
router.post(
  "/pengajuan-kegiatan",
  verifyToken,
  createPengajuanKegiatan
);

router.get(
  "/pengajuan-saya",
  verifyToken,
  getPengajuanSaya
);
export default router;