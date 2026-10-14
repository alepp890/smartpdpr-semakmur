// config.js

// 1. URL Web App Apps Script Backend
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx1on02e3fnNgc6CPnL8EuE2l0dYnoM1V7Zl6S6rqIO777cttovHthMcusAGQCtd_j7TQ/exec";

// 2. Google OAuth Client ID
const GOOGLE_CLIENT_ID = "637460698521-djt73cs1emsa5n5m7p2q8s4feohmhnuh.apps.googleusercontent.com";

// 3. Kamus Pautan Statik Google Meet Mengikut Aliran
const MEET_LINKS_ALIRAN = {
  "Tahun 1": "https://meet.google.com/jur-pryy-yjp",
  "Tahun 2": "https://meet.google.com/xid-eyuf-yjo",
  "Tahun 3": "https://meet.google.com/bxd-pqzr-fea",
  "Tahun 4": "https://meet.google.com/chk-ddbm-sso",
  "Tahun 5": "https://meet.google.com/chk-ddbm-sso",
  "Tahun 6": "https://meet.google.com/kxw-cufj-ugy"
};

/**
 * FUNGSI UTAMA: Ambil Pautan Meet Statik + Emel MOE Automatik
 * @param {string} aliran - Contoh: "Tahun 1"
 * @param {string} userEmail - Emel MOE murid/guru (pilihan)
 */
function getMeetLink(aliran, userEmail = "") {
  const baseUrl = MEET_LINKS_ALIRAN[aliran] || "https://meet.google.com/";
  if (userEmail) {
    return `${baseUrl}?authuser=${encodeURIComponent(userEmail)}`;
  }
  return baseUrl;
}
