/* =============================================================
   ⚙️  THÔNG TIN CÁ NHÂN  —  CHỈ CẦN SỬA DUY NHẤT FILE NÀY
   -------------------------------------------------------------
   Thay các giá trị trong dấu ngoặc [ ... ] bằng thông tin của bạn.
   Nội dung này sẽ tự động hiển thị trên cả 3 trang của Portfolio.
   (Giữ nguyên dấu ngoặc kép "..." và dấu phẩy ở cuối mỗi dòng)
   ============================================================= */

const CONFIG = {
  /* ---------- Định danh ---------- */
  fullName:  "[Họ và tên của bạn]",
  initials:  "P",              // 1–2 chữ cái viết tắt trên logo (VD: "TH")

  /* ---------- Thông tin học tập (hiển thị dạng thẻ ở trang chủ) ---------- */
  major:     "[Ngành học]",                       // Ngành
  school:    "Đại học Quốc gia Hà Nội (VNU)",      // Trường
  studentId: "[Mã sinh viên]",                    // MSSV
  classHP:   "[Lớp học phần]",                     // Lớp HP (VD: VNU1001_E252011)
  course:    "Nhập môn Công nghệ số & AI",         // Môn

  /* ---------- Liên hệ (hiển thị ở chân trang) ---------- */
  schoolEmail: "[mã_sv@vnu.edu.vn]",   // Email trường
  email:       "[email@gmail.com]",    // Email cá nhân

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
