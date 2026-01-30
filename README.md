# 🎨 Loader Library - Kho Giao Diện Loading

Bộ sưu tập 8 loading animations đẹp mắt, dễ sử dụng và hoàn toàn độc lập!

## 📁 Cấu Trúc Thư Mục

```
loader-library/
├── index.html          # Trang chính - giao diện kho loader
├── styles.css          # CSS cho trang chính
├── script.js           # JavaScript cho trang chính
├── README.md           # File này
└── loaders/            # Thư mục chứa các loader
    ├── spinner-dots/
    │   ├── index.html  # HTML riêng
    │   ├── styles.css  # CSS riêng
    │   └── script.js   # JS riêng
    ├── pulse-ring/
    │   ├── index.html
    │   ├── styles.css
    │   └── script.js
    ├── bouncing-balls/
    ├── wave-bars/
    ├── circular-progress/
    ├── square-flip/
    ├── dots-grid/
    └── infinity-loop/
```

## 🚀 Cách Sử Dụng

### 1. Xem Toàn Bộ Kho Loader
- Mở file `index.html` trong trình duyệt
- Xem preview của tất cả các loader
- Click vào loader bất kỳ để xem chi tiết

### 2. Sử Dụng Một Loader Riêng Lẻ

Mỗi loader có 3 file riêng biệt:
- `index.html` - Cấu trúc HTML
- `styles.css` - Thiết kế CSS
- `script.js` - JavaScript (nếu cần)

**Cách 1: Copy toàn bộ thư mục**
```bash
# Copy thư mục loader bạn muốn
cp -r loaders/spinner-dots/ your-project/
```

**Cách 2: Copy code từ giao diện**
1. Mở `index.html` trong trình duyệt
2. Click vào loader bạn muốn
3. Chọn tab HTML/CSS/JS
4. Click nút "Copy" để sao chép code
5. Paste vào project của bạn

**Cách 3: Tích hợp trực tiếp**
```html
<!-- Trong HTML của bạn -->
<link rel="stylesheet" href="path/to/loaders/spinner-dots/styles.css">

<div class="loader">
    <!-- Copy nội dung từ index.html của loader -->
</div>
```

## 🎯 Danh Sách Loader

1. **Spinner Dots** - Các chấm xoay tròn với hiệu ứng mượt mà
2. **Pulse Ring** - Vòng tròn nhấp nháy lan tỏa
3. **Bouncing Balls** - Các quả bóng nảy lên xuống nhịp nhàng
4. **Wave Bars** - Thanh sóng âm thanh chuyển động
5. **Circular Progress** - Vòng tròn tiến trình gradient
6. **Square Flip** - Hình vuông lật xoay 3D
7. **Dots Grid** - Lưới các chấm nhấp nháy
8. **Infinity Loop** - Dấu vô cực quay liên tục

## ✨ Đặc Điểm

- ✅ **Độc lập hoàn toàn**: Mỗi loader có HTML, CSS, JS riêng
- ✅ **Dễ tùy chỉnh**: Thay đổi màu sắc, kích thước dễ dàng
- ✅ **Responsive**: Hoạt động tốt trên mọi thiết bị
- ✅ **Nhẹ**: Chỉ sử dụng CSS animation, không cần thư viện
- ✅ **Modern**: Thiết kế đẹp mắt, hiện đại

## 🎨 Tùy Chỉnh Màu Sắc

Để thay đổi màu sắc của loader, sửa trong file `styles.css` của loader đó:

```css
/* Ví dụ: Spinner Dots */
.dot {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

Màu mặc định:
- Primary: `#FF3366` (Đỏ hồng)
- Accent: `#00ff88` (Xanh lá)

## 📱 Responsive

Tất cả loader đều tự động căn giữa và responsive. Để thay đổi kích thước:

```css
/* Điều chỉnh kích thước loader */
.loader {
    width: 100px;  /* Thay đổi theo ý muốn */
    height: 100px;
}
```

## 🛠️ Yêu Cầu Hệ Thống

- Trình duyệt hiện đại hỗ trợ CSS3 animations
- Không cần JavaScript framework
- Không cần cài đặt thêm gì

## 💡 Tips

1. **Preview trước khi dùng**: Luôn mở `index.html` để xem trước
2. **Test responsive**: Kiểm tra trên nhiều kích thước màn hình
3. **Tùy chỉnh màu**: Đổi màu cho phù hợp với theme của bạn
4. **Combine loaders**: Có thể dùng nhiều loader trong cùng 1 project

## 📝 License

Free to use cho personal và commercial projects!

---

Made with ❤️ by Claude