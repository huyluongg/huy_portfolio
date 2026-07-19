# 📘 Hướng dẫn hoàn thiện Portfolio

Bộ khung Portfolio đã được dựng sẵn theo **cấu trúc** của trang mẫu (Giới thiệu → Dự án →
Tổng kết) nhưng giữ **màu sắc & giao diện gốc** (tông xanh tím – cyan, có chế độ Sáng/Tối).
Việc của bạn chỉ là **điền thông tin** và **thay ảnh**.

---

## 🗂️ Cấu trúc thư mục

```
huy_portfolio/
├── index.html          → Trang Giới thiệu (hero + thẻ thông tin + 2 mục tiêu)
├── projects.html       → Trang Dự án (danh sách 6 bài, bấm để mở trang riêng)
├── bai1.html … bai6.html → Trang chi tiết riêng cho từng bài (tải nhẹ hơn)
├── summary.html        → Trang Tổng kết (3 phần)
├── css/style.css       → Giao diện (KHÔNG cần sửa)
├── js/
│   ├── config.js       → ⭐ THÔNG TIN CÁ NHÂN — sửa file này đầu tiên
│   └── main.js         → Xử lý chung (KHÔNG cần sửa)
├── assets/             → 🖼️ Nơi đặt ảnh của bạn
└── HUONG-DAN.md        → File hướng dẫn này
```

---

## ✅ Bước 1 — Điền thông tin cá nhân (2 phút)

Mở **`js/config.js`** và thay các giá trị trong `[ ... ]`:

| Trường | Ý nghĩa | Hiển thị ở |
|--------|---------|-----------|
| `fullName` | Họ và tên | Tiêu đề trang chủ, logo, chân trang |
| `initials` | 1–2 chữ viết tắt trên logo (VD `"TH"`) | Logo |
| `major` | Ngành học | Thẻ "Ngành" |
| `school` | Trường | Thẻ "Trường" |
| `studentId` | Mã sinh viên | Thẻ "MSSV" |
| `classHP` | Lớp học phần (VD `VNU1001_E252011`) | Thẻ "Lớp HP" |
| `course` | Tên môn | Thẻ "Môn" |
| `schoolEmail` / `email` | Email trường / cá nhân | Chân trang |
| `portfolioUrl` / `pdfUrl` | Link Portfolio & PDF nộp bài | Nút "Xem sản phẩm" |

> 💡 Chỉ sửa **một file này** → thông tin tự cập nhật trên **cả 3 trang**.

---

## ✍️ Bước 2 — Viết nội dung (tìm dấu `[✏️]`)

Mở 3 file `.html`, dùng **Ctrl+F** gõ `✏️` để nhảy tới từng chỗ cần điền. Xóa cả dấu ngoặc `[ ]` khi viết.

- **`index.html`** — đoạn giới thiệu bản thân + 2 ô "Mục tiêu học tập" và "Mục tiêu của Portfolio".
- **`projects.html`** — với mỗi Bài 1→6: điền **Mục tiêu** và **Quá trình thực hiện** (nhấn vào bài để thấy ô nhập).
- **`summary.html`** — 3 phần: Trải nghiệm & cảm nhận · Kiến thức & kỹ năng quan trọng nhất · Điều tâm đắc & thách thức.

---

## 🖼️ Bước 3 — Thêm ảnh

Đặt ảnh vào thư mục **`assets/`** với **đúng tên**:

| Tên file | Dùng cho |
|----------|----------|
| `profile.jpg` | Ảnh đại diện (trang chủ) |
| `bai1.png` … `bai6.png` | Ảnh minh họa từng bài (mở bài đó ra để xem) |

> ✨ Chưa có ảnh vẫn hiển thị đẹp với **ảnh mẫu tự động** — không bị vỡ ảnh.
> Ảnh `.png` hay `.jpg` đều được (giữ đúng phần tên như bảng trên).

---

## 🚀 Bước 4 — Xem thử & Nộp bài

- **Xem thử:** nháy đúp `index.html` để mở bằng trình duyệt.
- **Đăng lên mạng lấy link nộp:** dùng **GitHub Pages** hoặc kéo–thả cả thư mục vào
  **Netlify Drop** (https://app.netlify.com/drop). Có link rồi thì điền vào `portfolioUrl` / `pdfUrl` trong `config.js`.
- **Xuất PDF:** mở trang → `Ctrl + P` → *Save as PDF* (đã có sẵn định dạng in đẹp; trang Dự án tự mở hết các bài khi in).

---

## 🎨 Mẹo đạt điểm cao (theo Rubric)

- ✔️ Giao diện có **chế độ Sáng/Tối**, **hiệu ứng cuộn**, **responsive điện thoại**, 3 trang liên kết chặt chẽ.
- 💡 Phần **Quá trình thực hiện** viết càng chi tiết (toán tử tìm kiếm, công cụ, lý do lựa chọn) càng được điểm cao.
- 💡 Bài 6 nhớ nêu rõ **liêm chính học thuật** và **trích dẫn nguồn** đầy đủ.

Chúc bạn đạt điểm **Xuất sắc**! 🎓
