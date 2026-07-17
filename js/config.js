/* =============================================================
   ⚙️  THÔNG TIN CÁ NHÂN  —  CHỈ CẦN SỬA DUY NHẤT FILE NÀY
   -------------------------------------------------------------
   Thay các giá trị trong dấu ngoặc [ ... ] bằng thông tin của bạn.
   Nội dung này sẽ tự động hiển thị trên cả 3 trang của Portfolio.
   (Giữ nguyên dấu ngoặc kép "..." và dấu phẩy ở cuối mỗi dòng)
   ============================================================= */

const CONFIG = {
  /* ---------- Định danh ---------- */
  fullName:  "Lương Gia Huy",
  initials:  "GH",            // 1–2 chữ cái viết tắt trên logo

  /* ---------- Thông tin học tập (hiển thị dạng thẻ ở trang chủ) ---------- */
  major:     "Kinh tế Quốc tế",                   // Ngành
  school:    "ĐH Kinh tế – ĐHQGHN (UEB)",         // Trường
  studentId: "25050923",                          // MSSV
  classHP:   "QH-2025-E – KTQT 1",                // Lớp (khóa)
  lopHP:     "VNU1001_E252046",                    // Lớp học phần
  course:    "Nhập môn Công nghệ số & AI",         // Môn

  /* ---------- Liên hệ (hiển thị ở chân trang) ---------- */
  schoolEmail: "25050923@vnu.edu.vn",   // Email trường (kiểm tra lại giúp mình nhé)
  email:       "[email cá nhân của bạn]",   // ✏️ Điền email cá nhân (Gmail…) nếu muốn hiển thị

  /* ---------- Link nộp bài (điền sau khi upload) ---------- */
  portfolioUrl: "#",   // URL công khai của Portfolio
  pdfUrl:       "#",   // Link file PDF tổng hợp dự án

  /* ---------- Ảnh đại diện ---------- */
  // Đặt ảnh của bạn vào thư mục assets/ với tên: profile.jpg
  // (nếu chưa có ảnh, hệ thống sẽ tự hiển thị ảnh mẫu)
  profileImage: "assets/profile.jpg"
};

/* Xuất CONFIG ra toàn cục — KHÔNG cần sửa dòng dưới */
if (typeof window !== "undefined") window.CONFIG = CONFIG;
