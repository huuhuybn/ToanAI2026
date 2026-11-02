// ============================================================================
// TOAN AI 2026 - HỆ THỐNG SLIDE & HỌC LIỆU TƯƠNG TÁC BUỔI 1
// Cấu trúc chuẩn:
//   Phần 1: Lý thuyết Toán học Trực quan
//   Phần 2: Giới thiệu công cụ Google Colab & Demo vài đường cơ bản
//   Phần 3: Giao Bài tập Thực hành (3 cấp độ + Sản phẩm Mini-App)
// ============================================================================

// 1. DỮ LIỆU BẢN ĐỒ PIPELINE ML (SLIDE 1.1 - LÝ THUYẾT TOÁN)
const PIPELINE_STAGES = [
  {
    id: 0,
    step: "TRẠM 1 / 4",
    title: "1. Biểu diễn Dữ liệu bằng Toán học",
    sub: "Ảnh, Văn bản, Hồ sơ -> Vector & Ma trận",
    sessions: "Buổi 1, Buổi 3, Buổi 4, Buổi 10",
    mathUsed: "Đại số tuyến tính (Vector, Ma trận) & Thống kê mô tả",
    theoryExplain: "Máy tính không hiểu trực tiếp chữ viết hay hình ảnh. Toán học giúp số hóa mọi thứ: 1 đối tượng (1 sinh viên) được biểu diễn thành 1 Vector (danh sách các số), cả bảng dữ liệu hoặc 1 bức ảnh được biểu diễn thành 1 Ma trận (bảng 2 chiều gồm m hàng × n cột).",
    exampleMath: "Ví dụ: Hồ sơ sinh viên x = [GPA, Số_Project, Điểm_Code, Tiếng_Anh] = [3.2, 4, 8.5, 7.0] ∈ ℝ⁴"
  },
  {
    id: 1,
    step: "TRẠM 2 / 4",
    title: "2. Mô hình Dự đoán (Hàm số Toán học)",
    sub: "Kết hợp Đặc trưng (x) và Trọng số (w) -> Dự đoán (ŷ)",
    sessions: "Buổi 1, Buổi 2, Buổi 4, Buổi 7, Buổi 8",
    mathUsed: "Tích vô hướng (w·x + b), Hàm Sigmoid, Softmax, Định lý Bayes",
    theoryExplain: "Mô hình AI thực chất là một công thức toán học nhận đầu vào x, nhân với độ quan trọng của từng yếu tố w (Trọng số - Weights), cộng thêm hằng số nền b (Bias), sau đó dùng hàm Sigmoid/Softmax để quy đổi ra xác suất từ 0% đến 100%.",
    exampleMath: "Công thức 1 Nơ-ron nhân tạo: ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b = ∑(wᵢ·xᵢ) + b"
  },
  {
    id: 2,
    step: "TRẠM 3 / 4",
    title: "3. Đo lường Sai số (Hàm Mất Mát - Loss Function)",
    sub: "Đo khoảng cách giữa Dự đoán (ŷ) và Thực tế (y)",
    sessions: "Buổi 2, Buổi 9",
    mathUsed: "Khoảng cách Euclidean, Hàm Logarit, Information Entropy",
    theoryExplain: "Làm sao biết mô hình đoán đúng hay sai? Toán học cung cấp Hàm Mất Mát (Loss): nếu kết quả dự đoán ŷ càng lệch xa thực tế y, giá trị Loss càng lớn. Mục tiêu của việc học (Training) là ép con số Loss này về nhỏ nhất.",
    exampleMath: "Sai số trung bình bình phương (MSE): L = (1/n) ∑ (yᵢ - ŷᵢ)²"
  },
  {
    id: 3,
    step: "TRẠM 4 / 4",
    title: "4. Tối ưu hóa & Kiểm định Mô hình",
    sub: "Dùng Đạo hàm tự sửa trọng số w & Kiểm định Thống kê",
    sessions: "Buổi 5, Buổi 6, Buổi 11",
    mathUsed: "Giải tích (Đạo hàm, Gradient Descent) & Kiểm định giả thuyết (A/B Test)",
    theoryExplain: "Đạo hàm cho biết nếu tăng/giảm trọng số w một chút thì sai số Loss tăng hay giảm, từ đó máy tự động điều chỉnh w (Gradient Descent). Cuối cùng, Thống kê giúp kiểm định xem mô hình mới hiệu quả thật sự hay chỉ do ngẫu nhiên.",
    exampleMath: "Quy tắc cập nhật trọng số: w_mới = w_cũ - α · (Đạo hàm của Loss theo w)"
  }
];

// 2. DỮ LIỆU SLIDE 1.2: KÝ HIỆU TOÁN HỌC CỐT LÕI (PHẦN 1)
const TRANSLATOR_DATA = {
  vector: {
    title: "Khái niệm 1: Vô hướng (Scalar), Vector (𝐱 ∈ ℝⁿ) & Ma trận (𝐗 ∈ ℝᵐˣⁿ)",
    mathFormula: "x ∈ ℝ,     𝐱 = [x₁, x₂, ..., xₙ] ∈ ℝⁿ,     𝐗 ∈ ℝᵐˣⁿ",
    theoryMeaning: "• Vô hướng (Scalar - chữ thường in nghiêng x): Là 1 con số đơn lẻ (VD: tuổi = 20, điểm cộng = 0.5).\n• Vector (chữ thường in đậm 𝐱 ∈ ℝⁿ): Là một dãy gồm n con số xếp theo thứ tự, dùng để mô tả đầy đủ 1 đối tượng có n đặc trưng.\n• Ma trận (chữ hoa 𝐗 ∈ ℝᵐˣⁿ): Là bảng số chữ nhật gồm m dòng (m đối tượng) và n cột (n đặc trưng).",
    visualExample: `Ví dụ thực tế trong quản lý Sinh viên CNTT:
• Vô hướng x = 3.5 (Điểm GPA của 1 bạn)
• Vector 𝐱 ∈ ℝ⁴ của 1 sinh viên:
  𝐱 = [3.5,  4,  8.0,  7.0]  (Gồm 4 chiều: GPA, Số Project, Điểm Code, Tiếng Anh)

• Ma trận 𝐗 ∈ ℝ³ˣ⁴ của cả nhóm 3 sinh viên (3 hàng × 4 cột):
      ┌ 3.5   4   8.0   7.0 ┐  <- Sinh viên 1
  𝐗 = │ 2.8   2   6.0   5.5 │  <- Sinh viên 2
      └ 3.9   6   9.5   8.5 ┘  <- Sinh viên 3`
  },
  sigma: {
    title: "Khái niệm 2: Phép Tổng Sigma (∑) và Giá trị Trung bình (x̄)",
    mathFormula: "S = ∑(i=1 → n) xᵢ = x₁ + x₂ + ... + xₙ     |     x̄ = (1/n) ∑(i=1 → n) xᵢ",
    theoryMeaning: "• Ký hiệu ∑ (Sigma viết hoa trong bảng chữ cái Hy Lạp) đơn giản là lệnh 'Hãy cộng dồn tất cả các phần tử xᵢ lại với nhau, bắt đầu từ vị trí i = 1 cho đến vị trí cuối cùng n'.\n• Khi nhân thêm (1/n) ở phía trước tổng ∑, ta lấy tổng chia cho số lượng phần tử -> chính là Trung bình cộng (Mean).",
    visualExample: `Ví dụ: Cho vector điểm 4 môn của bạn là 𝐱 = [8.0, 7.0, 9.0, 6.0] (với n = 4 môn)

1. Tính Tổng Sigma:
   ∑(i=1→4) xᵢ = x₁ + x₂ + x₃ + x₄
               = 8.0 + 7.0 + 9.0 + 6.0 = 30.0

2. Tính Trung bình cộng (x̄):
   x̄ = (1/4) × ∑(i=1→4) xᵢ = 30.0 / 4 = 7.5 điểm`
  },
  dot: {
    title: "Khái niệm 3: Tích vô hướng (Dot Product) & Mô hình 1 Nơ-ron Nhân tạo",
    mathFormula: "ŷ = ∑(i=1 → n) wᵢ·xᵢ + b = w₁x₁ + w₂x₂ + ... + wₙxₙ + b = 𝐰 · 𝐱 + b",
    theoryMeaning: "• Trong thực tế, không phải yếu tố nào cũng quan trọng như nhau. Mỗi đặc trưng xᵢ sẽ được nhân với một Trọng số wᵢ (Weight - thể hiện mức độ quan trọng).\n• Sau khi nhân từng cặp (wᵢ × xᵢ) rồi cộng tổng lại, ta cộng thêm b (Bias - điểm sàn/độ lệch cơ sở).\n• Đây chính là công thức toán học của 1 Nơ-ron nhân tạo (Artificial Neuron) — viên gạch xây nên Deep Learning!",
    visualExample: `Ví dụ: Công thức tính Điểm Tổng Kết Môn Học tại trường Đại học:
• Đầu vào của bạn:  𝐱 = [Chuyên_cần = 9.0,  Giữa_kỳ = 7.5,  Cuối_kỳ = 8.0]
• Trọng số môn học: 𝐰 = [w₁ = 0.1 (10%),   w₂ = 0.3 (30%), w₃ = 0.6 (60%)]
• Điểm cộng ưu tiên: b = 0.2

=> Điểm dự đoán ŷ = (0.1 × 9.0) + (0.3 × 7.5) + (0.6 × 8.0) + 0.2
                  = 0.9 + 2.25 + 4.8 + 0.2 = 8.15 điểm!`
  }
};

// 3. DỮ LIỆU MẪU PIXEL MATRIX 8x8 (TRỰC QUAN HÓA MA TRẬN ẢNH)
const PIXEL_PRESETS = {
  digit8: [
    [0,  20, 200, 240, 240, 200,  20, 0],
    [0, 210, 250,  40,  40, 250, 210, 0],
    [0, 200, 240,  30,  30, 240, 200, 0],
    [0,  40, 220, 255, 255, 220,  40, 0],
    [0, 200, 240,  30,  30, 240, 200, 0],
    [0, 220, 250,  20,  20, 250, 220, 0],
    [0,  30, 210, 250, 250, 210,  30, 0],
    [0,   0,  20,  40,  40,  20,   0, 0]
  ],
  heart: [
    [0,  40, 220, 220,   0, 220, 220,  40],
    [40, 250, 255, 250, 180, 250, 255, 250],
    [40, 255, 255, 255, 255, 255, 255, 250],
    [20, 240, 255, 255, 255, 255, 240, 180],
    [0,  160, 250, 255, 255, 250, 160,   0],
    [0,   20, 180, 250, 250, 180,  20,   0],
    [0,    0,  30, 210, 210,  30,   0,   0],
    [0,    0,   0,  60,  60,   0,   0,   0]
  ],
  smile: [
    [0,   40, 180, 220, 220, 180,  40,   0],
    [40, 190,  40,  40,  40,  40, 190,  40],
    [180, 40, 255,  40,  40, 255,  40, 180],
    [220, 40,  40,  40,  40,  40,  40, 220],
    [220, 40, 240,  40,  40, 240,  40, 220],
    [180, 40,  60, 240, 240,  60,  40, 180],
    [40, 190,  40,  40,  40,  40, 190,  40],
    [0,   40, 180, 220, 220, 180,  40,   0]
  ],
  clear: Array.from({ length: 8 }, () => Array(8).fill(0))
};

let baseMatrix = JSON.parse(JSON.stringify(PIXEL_PRESETS.digit8));

// 4. DỮ LIỆU DEMO PHẦN 2: "VÀI ĐƯỜNG CƠ BẢN TRÊN GOOGLE COLAB"
const COLAB_DEMO_CELLS = [
  {
    id: "cell-1",
    title: "Đường cơ bản 1: Khởi tạo Vector (𝐱 ∈ ℝⁿ) & Ma trận (𝐗 ∈ ℝᵐˣⁿ) bằng NumPy",
    desc: "Biến lý thuyết Vector và Ma trận ở Phần 1 thành code Python chỉ với np.array() và kiểm tra kích thước bằng .shape:",
    code: `import numpy as np

# 1. Tạo Vector x ∈ R^4 (Hồ sơ 1 sinh viên: [GPA, Số_Project, Điểm_Code, Tiếng_Anh])
x = np.array([3.5, 4, 8.0, 7.0])
print("Vector x:", x)
print("Kích thước của x (shape):", x.shape)

# 2. Tạo Ma trận X ∈ R^(3x4) (Bảng gồm 3 sinh viên, mỗi người 4 thông số)
X = np.array([
    [3.5, 4, 8.0, 7.0],
    [2.8, 2, 6.0, 5.5],
    [3.9, 6, 9.5, 8.5]
])
print("\\nKích thước Ma trận X (dòng, cột):", X.shape)`,
    output: `Vector x: [3.5 4.  8.  7. ]
Kích thước của x (shape): (4,)

Kích thước Ma trận X (dòng, cột): (3, 4)`
  },
  {
    id: "cell-2",
    title: "Đường cơ bản 2: Tính Tổng Sigma (∑) và Trung bình (x̄) trong 1 nốt nhạc",
    desc: "Không cần viết vòng lặp for! Dùng trực tiếp np.sum(), np.mean(), np.max() lên mảng số:",
    code: `import numpy as np

diem_kiem_tra = np.array([8.0, 7.0, 9.0, 6.0])

# Tính tổng ∑ x_i và trung bình (1/n) ∑ x_i
tong_sigma = np.sum(diem_kiem_tra)
trung_binh = np.mean(diem_kiem_tra)
diem_cao_nhat = np.max(diem_kiem_tra)

print("Tổng Sigma (∑ x_i)      =", tong_sigma)
print("Trung bình cộng (x̄)     =", trung_binh)
print("Điểm cao nhất trong mảng =", diem_cao_nhat)`,
    output: `Tổng Sigma (∑ x_i)      = 30.0
Trung bình cộng (x̄)     = 7.5
Điểm cao nhất trong mảng = 9.0`
  },
  {
    id: "cell-3",
    title: "Đường cơ bản 3: Code công thức 1 Nơ-ron Nhân tạo (ŷ = 𝐰·𝐱 + b)",
    desc: "Hàm np.dot(w, x) tự động nhân từng cặp (wᵢ * xᵢ) rồi cộng tổng lại đúng như ký hiệu ∑ wᵢxᵢ:",
    code: `import numpy as np

# Điểm của sinh viên: [Chuyên cần, Giữa kỳ, Cuối kỳ]
x = np.array([9.0, 7.5, 8.0])

# Trọng số môn học: [10%, 30%, 60%] và điểm cộng b = 0.2
w = np.array([0.1, 0.3, 0.6])
b = 0.2

# Tính đầu ra của Nơ-ron: y_hat = w · x + b
y_hat = np.dot(w, x) + b
print(f"Điểm tổng kết dự đoán (ŷ) = {y_hat:.2f} điểm")`,
    output: `Điểm tổng kết dự đoán (ŷ) = 8.15 điểm`
  },
  {
    id: "cell-4",
    title: "Đường cơ bản 4: Sức mạnh Ma trận — Chấm điểm cả danh sách không cần vòng lặp for!",
    desc: "Chỉ cần thay vector x (1 người) bằng Ma trận X (nhiều người), lệnh np.dot(X, w) + b sẽ chấm điểm toàn bộ ứng viên cùng lúc:",
    code: `import numpy as np

# Ma trận X (3 ứng viên × 4 tiêu chí: [GPA, Số_Project, Điểm_Code, Tiếng_Anh])
X = np.array([
    [3.5, 4, 8.0, 7.0], # Ứng viên 1
    [2.8, 2, 6.0, 5.5], # Ứng viên 2
    [3.9, 6, 9.5, 8.5]  # Ứng viên 3
])

# Trọng số tuyển dụng của công ty w và điểm sàn b
w = np.array([1.5, 1.5, 2.0, 1.5])
b = 2.0

# Tính điểm cho cả 3 ứng viên trong 1 dòng lệnh duy nhất!
diem_ung_vien = np.dot(X, w) + b
print("Điểm của 3 ứng viên lần lượt là:", diem_ung_vien)`,
    output: `Điểm của 3 ứng viên lần lượt là: [39.75 29.45 53.6 ]`
  }
];

// 5. DỮ LIỆU BÀI TẬP THỰC HÀNH (PHẦN 3 - BÀI TẬP 3 MINI-APP)
let candidates = [
  { name: "Nguyễn Văn An (Bạn)", gpa: 3.2, projects: 4, coding: 8.0, english: 7.0 },
  { name: "Trần Thị Bình", gpa: 3.8, projects: 2, coding: 6.5, english: 8.5 },
  { name: "Lê Hoàng Nam", gpa: 2.7, projects: 6, coding: 9.2, english: 6.0 },
  { name: "Phạm Minh Tuấn", gpa: 2.5, projects: 1, coding: 5.0, english: 4.5 },
  { name: "Hoàng Thu Hà", gpa: 3.6, projects: 5, coding: 8.8, english: 8.0 }
];

// 6. CÂU HỎI QUIZ KIỂM TRA LÝ THUYẾT (CUỐI PHẦN 1)
const QUIZ_QUESTIONS = [
  {
    q: "Câu 1: Khi đọc tài liệu AI thấy ký hiệu X ∈ ℝ^(100 × 5), ý nghĩa toán học của X là gì?",
    options: [
      "A. Một Ma trận (bảng số 2 chiều) gồm 100 hàng (mẫu dữ liệu) và 5 cột (đặc trưng)",
      "B. Một phép nhân lấy 100 × 5 = 500",
      "C. Một số vô hướng duy nhất",
      "D. Một vector chỉ có 1 chiều"
    ],
    answer: 0,
    explain: "Chính xác! ℝ^(m×n) biểu diễn một Ma trận có m hàng (đối tượng) và n cột (thuộc tính)."
  },
  {
    q: "Câu 2: Ký hiệu toán học x̄ = (1/n) ∑(i=1..n) xᵢ biểu thị phép tính gì?",
    options: [
      "A. Tìm giá trị lớn nhất trong dãy số",
      "B. Cộng tất cả các phần tử xᵢ lại rồi chia cho số lượng phần tử n (Tính trung bình cộng)",
      "C. Nhân tất cả các phần tử lại với nhau",
      "D. Đảo ngược thứ tự của dãy số"
    ],
    answer: 1,
    explain: "Chuẩn luôn! ∑ xᵢ là tổng các phần tử, nhân với (1/n) là chia cho số phần tử -> Giá trị trung bình cộng."
  },
  {
    q: "Câu 3: Trong công thức của 1 Nơ-ron nhân tạo ŷ = w₁x₁ + w₂x₂ + w₃x₃ + b, các hệ số w₁, w₂, w₃ đóng vai trò gì?",
    options: [
      "A. Là số thứ tự của sinh viên trong lớp",
      "B. Là Trọng số (Weights) — thể hiện mức độ quan trọng của từng đặc trưng đầu vào x₁, x₂, x₃",
      "C. Là các số ngẫu nhiên không ảnh hưởng đến kết quả ŷ",
      "D. Là kích thước của bức ảnh"
    ],
    answer: 1,
    explain: "Đúng rồi! Trọng số wᵢ càng lớn thì đặc trưng xᵢ đó càng có sức nặng quyết định đến kết quả dự đoán ŷ."
  },
  {
    q: "Câu 4: Một bức ảnh đen trắng 8×8 pixel khi đưa vào máy tính sẽ được biểu diễn như thế nào?",
    options: [
      "A. Một Ma trận 8 dòng × 8 cột chứa các con số từ 0 (đen) đến 255 (trắng)",
      "B. Một đoạn văn bản mô tả bức ảnh",
      "C. Một số vô hướng duy nhất",
      "D. Không thể biểu diễn bằng toán học"
    ],
    answer: 0,
    explain: "Xuất sắc! Mỗi điểm ảnh (pixel) là một con số thể hiện cường độ sáng, tạo thành ma trận 2 chiều."
  }
];

// 7. DỮ LIỆU LỘ TRÌNH 11 BUỔI
const SYLLABUS_DATA = [
  {
    buoi: 1,
    phan: "A. Nền tảng",
    title: "Bản đồ Toán trong AI, Ký hiệu Toán & Làm quen Google Colab / NumPy",
    mathOriginal: "Tổng quan Pipeline ML, ký hiệu ∑, Vector x ∈ ℝⁿ, Ma trận X ∈ ℝᵐˣⁿ, Tích vô hướng",
    coderView: "Phần 1: Lý thuyết Toán trực quan -> Phần 2: Demo vài đường Colab/NumPy -> Phần 3: Giao bài tập",
    aiApp: "Bản đồ toán trong Pipeline ML & Mô hình 1 Nơ-ron chấm điểm (ŷ = w·x + b)",
    demo: "Bài tập & Mini-App: Xử lý Ma trận Ảnh & Hệ thống AI Chấm điểm CV + Dự đoán Lương Thực tập IT",
    status: "active"
  },
  {
    buoi: 2,
    phan: "A. Nền tảng",
    title: "Hàm số, Sigmoid, Khoảng cách & Thuật toán 'Ngưu tầm ngưu' (KNN)",
    mathOriginal: "Hàm số, hàm mũ/log, hàm Sigmoid, khoảng cách Euclidean/Manhattan",
    coderView: "Biến điểm số bất kỳ thành xác suất (0% -> 100%) và đo độ giống nhau giữa 2 đối tượng",
    aiApp: "Hàm kích hoạt Sigmoid, Log-loss, thuật toán phân loại KNN",
    demo: "Bài tập & Mini-App: Công cụ Định giá Laptop cũ / Gợi ý Phòng trọ bằng khoảng cách KNN",
    status: "upcoming"
  },
  {
    buoi: 3,
    phan: "B. Đại số tuyến tính",
    title: "Vector, Độ tương tự Cosine & Bí mật của Tìm kiếm Ngữ nghĩa (RAG)",
    mathOriginal: "Không gian vector, tích vô hướng, góc giữa 2 vector (Cosine Similarity)",
    coderView: "Biến văn bản thành mảng số (Embedding) để đo độ sát nghĩa thay vì tìm trùng từ khóa",
    aiApp: "Word/Sentence Embedding, Semantic Search, Chatbot RAG",
    demo: "Bài tập & Mini-App: Máy Tìm kiếm Tài liệu Đồ án & So khớp CV - JD bằng Cosine Similarity",
    status: "upcoming"
  },
  {
    buoi: 4,
    phan: "B. Đại số tuyến tính",
    title: "Phép nhân Ma trận, Trị riêng & Nén dữ liệu nhiều chiều (PCA)",
    mathOriginal: "Nhân ma trận, định thức, trị riêng (Eigenvalues), vector riêng, PCA",
    coderView: "Truyền dữ liệu qua lớp mạng Nơ-ron (Dense Layer) & Rút gọn bảng 50 cột về 2 cột để vẽ đồ thị",
    aiApp: "Lớp Dense trong Deep Learning & Giảm chiều dữ liệu PCA",
    demo: "Bài tập & Mini-App: Bản đồ Phân cụm Sinh viên / Khách hàng 2D & Nén dung lượng Ảnh bằng PCA",
    status: "upcoming"
  },
  {
    buoi: 5,
    phan: "C. Giải tích",
    title: "Đạo hàm & Chain Rule: Cách Mạng Nơ-ron 'Truy tìm Thủ phạm' gây lỗi",
    mathOriginal: "Đạo hàm, đạo hàm riêng, quy tắc chuỗi (Chain Rule)",
    coderView: "Đo độ nhạy: Nhích nhẹ trọng số w thì sai số Loss thay đổi bao nhiêu?",
    aiApp: "Lan truyền ngược (Backpropagation) trên 1 Nơ-ron",
    demo: "Bài tập & Mini-App: Trình mô phỏng Huấn luyện Nơ-ron tự động tìm công thức ẩn từ dữ liệu",
    status: "upcoming"
  },
  {
    buoi: 6,
    phan: "C. Giải tích",
    title: "Gradient Descent & Tối ưu hóa: Dạy Máy tự Học từ Sai lầm",
    mathOriginal: "Vector Gradient, cực trị hàm nhiều biến, thuật toán Gradient Descent",
    coderView: "Thuật toán 'Xuống núi trong sương mù' & Chọn tốc độ học (Learning Rate) tối ưu",
    aiApp: "Gradient Descent, Learning Rate, Huấn luyện mô hình AI thực tế",
    demo: "Bài tập & Mini-App: Huấn luyện mô hình Dự đoán Giá nhà & Nhận diện Cử chỉ qua Webcam",
    status: "upcoming"
  },
  {
    buoi: 7,
    phan: "D. Xác suất",
    title: "Xác suất có Điều kiện & Định lý Bayes: Tư duy Bắt bệnh và Lọc Spam",
    mathOriginal: "Xác suất cơ bản, xác suất có điều kiện P(A|B), định lý Bayes",
    coderView: "Cập nhật xác suất khi có bằng chứng mới: Thấy từ 'Trúng thưởng' thì bao nhiêu % là mail rác?",
    aiApp: "Thuật toán phân loại văn bản Naive Bayes",
    demo: "Bài tập & Mini-App: Bộ lọc Tin nhắn Rác & Phân loại Bình luận Shopee (Khen/Chê) tự động",
    status: "upcoming"
  },
  {
    buoi: 8,
    phan: "D. Xác suất",
    title: "Biến ngẫu nhiên, Phân phối Chuẩn & Giải mã Softmax trong ChatGPT",
    mathOriginal: "Biến ngẫu nhiên rời rạc/liên tục, phân phối chuẩn (Gaussian), hàm Softmax",
    coderView: "Cách AI sinh từ tiếp theo theo xác suất & Khởi tạo trọng số mạng Nơ-ron",
    aiApp: "Hàm Softmax (Phân loại đa lớp), tham số Temperature trong LLM",
    demo: "Bài tập & Mini-App: Bảng điều khiển Hộp đen LLM (Tuỳ biến Temperature điều khiển độ sáng tạo AI)",
    status: "upcoming"
  },
  {
    buoi: 9,
    phan: "D. Xác suất",
    title: "Kỳ vọng, Hiệp phương sai & Entropy: Đo lường Độ bất định của AI",
    mathOriginal: "Kỳ vọng, phương sai, ma trận hiệp phương sai, Information Entropy",
    coderView: "Chọn cột dữ liệu chứa nhiều thông tin nhất & Hàm phạt Cross-Entropy khi AI đoán sai",
    aiApp: "Cross-Entropy Loss & Phân tích tương quan đặc trưng (Feature Correlation)",
    demo: "Bài tập & Mini-App: Công cụ Tự động Sàng lọc Biến rác & Dashboard Đo độ Tự tin của AI",
    status: "upcoming"
  },
  {
    buoi: 10,
    phan: "E. Thống kê",
    title: "Thống kê Mô tả, Chuẩn hóa & Ước lượng Hợp lý Cực đại (MLE)",
    mathOriginal: "Mean, Median, Quantile, Z-score Normalization, Min-Max Scaling, MLE",
    coderView: "Làm sạch dữ liệu bẩn, bắt điểm ngoại lai (Outliers) và đưa dữ liệu về chuẩn trước khi train AI",
    aiApp: "Khám phá dữ liệu (EDA), Feature Scaling & Phát hiện bất thường",
    demo: "Bài tập & Mini-App: Bác sĩ Dữ liệu (Upload CSV -> Tự động chuẩn hóa & bắt giao dịch gian lận)",
    status: "upcoming"
  },
  {
    buoi: 11,
    phan: "E. Thống kê",
    title: "Khoảng tin cậy & Kiểm định Giả thuyết: A/B Testing hai Mô hình AI",
    mathOriginal: "Khoảng tin cậy (Confidence Interval), p-value, kiểm định giả thuyết",
    coderView: "Mô hình mới tăng 2% độ chính xác là 'giỏi thật' hay chỉ 'ăn may' trên tập test?",
    aiApp: "A/B Testing trong Sản phẩm Công nghệ & So sánh hiệu năng 2 mô hình ML",
    demo: "Bài tập & Mini-App: Máy tính Quyết định A/B Testing (Báo đèn Xanh/Đỏ để Release mô hình)",
    status: "upcoming"
  }
];

// ============================================================================
// KHỞI TẠO GIAO DIỆN & SỰ KIỆN
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderPipeline(0);
  renderTranslator("vector");
  updateSigmaCalc();
  renderPixelLab();
  renderColabDemoCells();
  renderCVDemo();
  renderSyllabus();
  renderQuiz();
});

function initNavigation() {
  const buttons = document.querySelectorAll(".nav-btn");
  const panels = document.querySelectorAll(".view-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      activateTab(target);
    });
  });
}

function activateTab(targetId) {
  const buttons = document.querySelectorAll(".nav-btn");
  const panels = document.querySelectorAll(".view-panel");
  const flowSteps = document.querySelectorAll(".flow-step");

  buttons.forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-target") === targetId);
  });

  panels.forEach((p) => {
    p.classList.toggle("active", p.id === targetId);
  });

  flowSteps.forEach((f) => {
    f.classList.toggle("active-flow", f.getAttribute("data-flow") === targetId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchTab(targetId) {
  activateTab(targetId);
}

// ----------------------------------------------------------------------------
// PHẦN 1: SLIDE LÝ THUYẾT TOÁN HỌC TRỰC QUAN
// ----------------------------------------------------------------------------
function renderPipeline(activeIndex) {
  const nodes = document.querySelectorAll(".pipe-node");
  nodes.forEach((node, idx) => {
    node.classList.toggle("active", idx === activeIndex);
  });

  const stage = PIPELINE_STAGES[activeIndex];
  const detailBox = document.getElementById("pipeline-detail");
  if (!detailBox || !stage) return;

  detailBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
      <span class="tag tag-blue">${stage.step} — Học tại: ${stage.sessions}</span>
      <span class="tag tag-purple">Nhánh Toán: ${stage.mathUsed}</span>
    </div>
    <h3 style="font-size:1.22rem; color:#fff; margin-bottom:0.5rem;">${stage.title}</h3>
    <p style="color:var(--text-main); margin-bottom:0.9rem;">📐 <strong>Bản chất Lý thuyết:</strong> ${stage.theoryExplain}</p>
    <div style="background:#060911; border:1px dashed rgba(245, 158, 11, 0.4); padding:0.85rem 1rem; border-radius:8px; font-family:var(--font-mono); color:#fbbf24; font-size:0.9rem;">
      ${escapeHtml(stage.exampleMath)}
    </div>
  `;
}

function renderTranslator(key) {
  const tabs = document.querySelectorAll(".trans-tab");
  tabs.forEach((t) => {
    t.classList.toggle("active", t.getAttribute("data-key") === key);
  });

  const item = TRANSLATOR_DATA[key];
  const content = document.getElementById("translator-content");
  if (!content || !item) return;

  content.innerHTML = `
    <div class="trans-card">
      <div class="math-panel">
        <span class="panel-label" style="color:#fbbf24;">📐 Ký hiệu &amp; Định nghĩa Toán học</span>
        <h3 style="color:#fff;">${item.title}</h3>
        <div class="math-formula">${item.mathFormula}</div>
        <p style="color:#e2e8f0; font-size:0.94rem; white-space:pre-line;">${item.theoryMeaning}</p>
      </div>
      <div class="code-panel">
        <span class="panel-label" style="color:#34d399;">🔍 Ví dụ Minh họa Cụ thể (Chưa cần viết Code)</span>
        <pre class="code-block" style="color:#93c5fd;">${escapeHtml(item.visualExample)}</pre>
      </div>
    </div>
  `;
}

function updateSigmaCalc() {
  const inputs = document.querySelectorAll(".sigma-val");
  const vals = Array.from(inputs).map((el) => parseFloat(el.value) || 0);
  const n = vals.length;
  const sum = vals.reduce((a, b) => a + b, 0);
  const mean = sum / n;

  const outFormula = document.getElementById("sigma-live-result");
  if (outFormula) {
    outFormula.innerHTML = `
      <div>• Vector <strong>𝐱</strong> = <code>[${vals.join(", ")}]</code> &isin; ℝ<sup>${n}</sup> (Số chiều <code>n = ${n}</code>)</div>
      <div style="margin-top:0.35rem;">• Phép Tổng Sigma: <strong>&sum; xᵢ</strong> = ${vals.join(" + ")} = <strong style="color:#fbbf24; font-size:1.1rem;">${sum.toFixed(1)}</strong></div>
      <div style="margin-top:0.35rem;">• Giá trị Trung bình: <strong>x̄ = (1/${n}) &sum; xᵢ</strong> = ${sum.toFixed(1)} / ${n} = <strong style="color:#34d399; font-size:1.1rem;">${mean.toFixed(2)}</strong></div>
    `;
  }
}

// Phòng thí nghiệm Ma trận Ảnh 8x8 (Trực quan hóa Ma trận ở Phần 1)
function loadPixelPreset(name) {
  if (PIXEL_PRESETS[name]) {
    baseMatrix = JSON.parse(JSON.stringify(PIXEL_PRESETS[name]));
    resetPixelSliders();
    renderPixelLab();
  }
}

function resetPixelSliders() {
  const bSlider = document.getElementById("brightness-slider");
  const cSlider = document.getElementById("contrast-slider");
  const invCheck = document.getElementById("invert-check");
  const thresCheck = document.getElementById("threshold-check");

  if (bSlider) bSlider.value = 0;
  if (cSlider) cSlider.value = 1.0;
  if (invCheck) invCheck.checked = false;
  if (thresCheck) thresCheck.checked = false;
}

function computeTransformedMatrix() {
  const b = parseInt(document.getElementById("brightness-slider")?.value || "0", 10);
  const c = parseFloat(document.getElementById("contrast-slider")?.value || "1");
  const invert = document.getElementById("invert-check")?.checked || false;
  const threshold = document.getElementById("threshold-check")?.checked || false;

  const bVal = document.getElementById("brightness-val");
  const cVal = document.getElementById("contrast-val");
  if (bVal) bVal.textContent = (b >= 0 ? "+" : "") + b;
  if (cVal) cVal.textContent = c.toFixed(1) + "x";

  const result = baseMatrix.map((row) =>
    row.map((px) => {
      let val = Math.round(px * c + b);
      val = Math.max(0, Math.min(255, val));
      if (invert) val = 255 - val;
      if (threshold) val = val >= 128 ? 255 : 0;
      return val;
    })
  );

  return { result, b, c, invert, threshold };
}

function renderPixelLab() {
  const gridEl = document.getElementById("pixel-grid");
  const matrixTextEl = document.getElementById("numpy-matrix-output");
  const mathDescEl = document.getElementById("pixel-math-desc");
  if (!gridEl) return;

  const { result, b, c, invert, threshold } = computeTransformedMatrix();

  gridEl.innerHTML = "";
  result.forEach((row, rIdx) => {
    row.forEach((val, cIdx) => {
      const cell = document.createElement("div");
      cell.className = "pixel-cell";
      cell.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
      cell.style.color = val > 135 ? "#090d16" : "#94a3b8";
      cell.textContent = val;
      cell.title = `Phần tử X[${rIdx}, ${cIdx}] = ${val}`;
      cell.addEventListener("click", () => {
        baseMatrix[rIdx][cIdx] = baseMatrix[rIdx][cIdx] > 128 ? 0 : 250;
        renderPixelLab();
      });
      gridEl.appendChild(cell);
    });
  });

  if (matrixTextEl) {
    const formattedRows = result.map(
      (r) => "  [" + r.map((v) => String(v).padStart(3, " ")).join(", ") + "]"
    );
    matrixTextEl.textContent = `Ma trận 𝐗 ∈ ℝ^(8×8) =\n[\n${formattedRows.join(",\n")}\n]`;
  }

  if (mathDescEl) {
    let formula = `𝐗_mới = ${c.toFixed(1)} · 𝐗_gốc ${b >= 0 ? "+ " + b : "- " + Math.abs(b)}`;
    if (invert) formula = `255 - (${formula})`;
    if (threshold) formula = `Ngưỡng_Nhị_Phân(${formula} ≥ 128)`;
    mathDescEl.textContent = `Công thức Toán học đang áp dụng lên từng phần tử X[i,j]:\n${formula}`;
  }
}

// ----------------------------------------------------------------------------
// PHẦN 2: GIỚI THIỆU GOOGLE COLAB & DEMO "VÀI ĐƯỜNG CƠ BẢN"
// ----------------------------------------------------------------------------
function renderColabDemoCells() {
  const container = document.getElementById("colab-demo-container");
  if (!container) return;

  container.innerHTML = COLAB_DEMO_CELLS.map(
    (cell, idx) => `
      <div class="colab-cell-card">
        <div class="colab-cell-header">
          <div class="colab-cell-title">
            <span class="tag tag-amber">In [${idx + 1}]</span>
            <span>${cell.title}</span>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn-secondary" style="padding:0.35rem 0.7rem; font-size:0.78rem;" onclick="copyCodeById('code-${cell.id}', this)">📋 Copy vào Colab</button>
            <button class="colab-run-btn" onclick="runSimulatedCell('${cell.id}')">▶️ Chạy thử Cell (Shift+Enter)</button>
          </div>
        </div>
        <div class="colab-cell-body">
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:0.65rem;">${cell.desc}</p>
          <pre id="code-${cell.id}" class="code-block">${escapeHtml(cell.code)}</pre>
          <div id="out-${cell.id}" class="colab-output-box">
            <div style="color:#34d399; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.25rem; font-weight:700;">✔ Kết quả Output trên Google Colab:</div>${escapeHtml(cell.output)}
          </div>
        </div>
      </div>
    `
  ).join("");
}

function runSimulatedCell(cellId) {
  const outBox = document.getElementById(`out-${cellId}`);
  if (!outBox) return;
  outBox.classList.add("visible");
}

function runAllSimulatedCells() {
  COLAB_DEMO_CELLS.forEach((c) => runSimulatedCell(c.id));
}

// ----------------------------------------------------------------------------
// PHẦN 3: GIAO BÀI TẬP THỰC HÀNH & ĐÁP ÁN MẪU
// ----------------------------------------------------------------------------
function toggleSolution(id, btnEl) {
  const box = document.getElementById(id);
  if (!box) return;
  const isOpen = box.classList.toggle("open");
  btnEl.textContent = isOpen ? "🙈 Ẩn Đáp Án Gợi Ý" : "💡 Xem Đáp Án Gợi Ý (Dành cho GV chữa bài)";
}

// Bảng tương tác Bài tập 3 (Mini-App Chấm điểm CV & Dự đoán Lương IT)
function setCompanyPreset(preset) {
  const wGpa = document.getElementById("w-gpa");
  const wProj = document.getElementById("w-proj");
  const wCode = document.getElementById("w-code");
  const wEng = document.getElementById("w-eng");
  const bBias = document.getElementById("b-bias");

  if (preset === "product") {
    wGpa.value = 1.0;
    wProj.value = 1.8;
    wCode.value = 2.5;
    wEng.value = 1.2;
    bBias.value = 2.0;
  } else if (preset === "global") {
    wGpa.value = 2.2;
    wProj.value = 1.2;
    wCode.value = 1.5;
    wEng.value = 2.5;
    bBias.value = 1.5;
  } else if (preset === "fresher") {
    wGpa.value = 1.5;
    wProj.value = 1.5;
    wCode.value = 2.0;
    wEng.value = 1.5;
    bBias.value = 2.0;
  }
  renderCVDemo();
}

function renderCVDemo() {
  const w1 = parseFloat(document.getElementById("w-gpa")?.value || "1.5");
  const w2 = parseFloat(document.getElementById("w-proj")?.value || "1.5");
  const w3 = parseFloat(document.getElementById("w-code")?.value || "2.0");
  const w4 = parseFloat(document.getElementById("w-eng")?.value || "1.5");
  const b = parseFloat(document.getElementById("b-bias")?.value || "2.0");

  const elGpa = document.getElementById("val-w-gpa");
  if (!elGpa) return;

  elGpa.textContent = w1.toFixed(1);
  document.getElementById("val-w-proj").textContent = w2.toFixed(1);
  document.getElementById("val-w-code").textContent = w3.toFixed(1);
  document.getElementById("val-w-eng").textContent = w4.toFixed(1);
  document.getElementById("val-b-bias").textContent = b.toFixed(1);

  const scored = candidates.map((c, idx) => {
    const rawScore = w1 * c.gpa + w2 * c.projects + w3 * c.coding + w4 * c.english + b;
    const score100 = Math.min(100, Math.round((rawScore / 52) * 100));
    const salaryM = (rawScore * 0.32).toFixed(1);
    return { ...c, idx, rawScore, score100, salaryM };
  });

  const ranked = [...scored].sort((a, b) => b.rawScore - a.rawScore);

  const tbody = document.getElementById("cv-table-body");
  if (tbody) {
    tbody.innerHTML = ranked
      .map((item, rank) => {
        let badge = `<span class="badge-pass">🔥 Đậu Offer (${item.salaryM} tr/tháng)</span>`;
        if (item.score100 < 55) {
          badge = `<span class="badge-fail">❌ Cần bổ sung Project</span>`;
        } else if (item.score100 < 72) {
          badge = `<span class="badge-wait">⚡ Vòng Phỏng vấn (${item.salaryM} tr)</span>`;
        }

        return `
          <tr>
            <td><strong>#${rank + 1}</strong></td>
            <td style="font-weight:700; color:#fff;">${escapeHtml(item.name)}</td>
            <td>${item.gpa.toFixed(1)}</td>
            <td>${item.projects}</td>
            <td>${item.coding.toFixed(1)}</td>
            <td>${item.english.toFixed(1)}</td>
            <td style="font-family:var(--font-mono); color:#38bdf8; font-weight:700;">
              ${item.rawScore.toFixed(1)} đ (${item.score100}/100)
            </td>
            <td>${badge}</td>
          </tr>
        `;
      })
      .join("");
  }

  const top1 = ranked[0];
  const formulaEl = document.getElementById("cv-live-formula");
  if (formulaEl && top1) {
    formulaEl.innerHTML = `
      <div>🎯 <strong>Phép tính Nơ-ron (<code>np.dot(X, w) + b</code>) cho Top #1 (${escapeHtml(top1.name)}):</strong></div>
      <div style="font-family:var(--font-mono); color:#fbbf24; margin-top:0.35rem;">
        ŷ = (${w1.toFixed(1)} × ${top1.gpa}) + (${w2.toFixed(1)} × ${top1.projects}) + (${w3.toFixed(1)} × ${top1.coding}) + (${w4.toFixed(1)} × ${top1.english}) + ${b.toFixed(1)}
        = <strong>${top1.rawScore.toFixed(2)} điểm</strong> &rarr; Lương đề xuất: <strong>${top1.salaryM} triệu VNĐ</strong>
      </div>
    `;
  }

  const codeBox = document.getElementById("cv-python-code");
  if (codeBox) {
    const matrixRows = candidates
      .map((c) => `    [${c.gpa}, ${c.projects}, ${c.coding}, ${c.english}], # ${c.name}`)
      .join("\n");

    codeBox.textContent = `import numpy as np

# 1. Ma trận ứng viên X ∈ R^(${candidates.length}x4): [GPA, Số_Project, Điểm_Code, Tiếng_Anh]
X = np.array([
${matrixRows}
])

# 2. Vector Trọng số tuyển dụng w ∈ R^4 và Điểm sàn b
w = np.array([${w1.toFixed(1)}, ${w2.toFixed(1)}, ${w3.toFixed(1)}, ${w4.toFixed(1)}])
b = ${b.toFixed(1)}

# 3. Chấm điểm đồng loạt bằng phép nhân Ma trận (Không cần vòng lặp for!)
diem_tong = np.dot(X, w) + b
luong_du_kien = np.round(diem_tong * 0.32, 1)

for i, diem in enumerate(diem_tong):
    print(f"Ứng viên {i+1}: {diem:.1f} điểm -> Lương đề xuất: {luong_du_kien[i]} triệu VNĐ")`;
  }
}

function addCandidateFromForm() {
  const nameInput = document.getElementById("inp-name");
  const gpaInput = document.getElementById("inp-gpa");
  const projInput = document.getElementById("inp-proj");
  const codeInput = document.getElementById("inp-code");
  const engInput = document.getElementById("inp-eng");

  const name = (nameInput?.value || "").trim() || `Sinh viên CNTT #${candidates.length + 1}`;
  const gpa = Math.min(4.0, Math.max(0, parseFloat(gpaInput?.value) || 3.0));
  const projects = Math.max(0, parseInt(projInput?.value, 10) || 2);
  const coding = Math.min(10.0, Math.max(0, parseFloat(codeInput?.value) || 7.5));
  const english = Math.min(10.0, Math.max(0, parseFloat(engInput?.value) || 6.5));

  if (candidates.length > 0 && name.toLowerCase() === candidates[0].name.toLowerCase()) {
    candidates[0] = { name, gpa, projects, coding, english };
  } else {
    candidates.unshift({ name, gpa, projects, coding, english });
  }

  renderCVDemo();
}

function copyCodeById(elementId, btnEl) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    const oldText = btnEl.textContent;
    btnEl.textContent = "✅ Đã Copy!";
    setTimeout(() => {
      btnEl.textContent = oldText;
    }, 1800);
  });
}

// ----------------------------------------------------------------------------
// LỘ TRÌNH 11 BUỔI & QUIZ
// ----------------------------------------------------------------------------
function renderSyllabus() {
  const container = document.getElementById("syllabus-container");
  if (!container) return;

  container.innerHTML = SYLLABUS_DATA.map((item) => {
    const isBuoi1 = item.buoi === 1;
    return `
      <div class="session-card ${isBuoi1 ? "featured" : ""}">
        <div>
          <div class="session-meta">
            <span class="tag ${isBuoi1 ? "tag-emerald" : "tag-blue"}">Buổi ${item.buoi} • ${item.phan}</span>
            ${isBuoi1 ? '<span class="tag tag-amber">★ Đang học</span>' : ""}
          </div>
          <h3 style="font-size:1.12rem; color:#fff; margin-bottom:0.5rem;">${item.title}</h3>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.45rem;">
            <strong>Lý thuyết Toán:</strong> ${item.mathOriginal}
          </p>
          <p style="font-size:0.88rem; color:#93c5fd; margin-bottom:0.45rem;">
            💡 <strong>Trọng tâm:</strong> ${item.coderView}
          </p>
          <p style="font-size:0.86rem; color:#c4b5fd;">
            🤖 <strong>Ứng dụng AI:</strong> ${item.aiApp}
          </p>
        </div>
        <div>
          <div class="session-demo-box">
            <strong>📝 Bài tập &amp; Sản phẩm cuối buổi:</strong><br/>
            <span style="color:#fde68a;">${item.demo}</span>
          </div>
          ${
            isBuoi1
              ? `<button class="btn-primary" style="width:100%; margin-top:0.85rem; justify-content:center;" onclick="switchTab('tab-part1')">Xem Slide Buổi 1 &rarr;</button>`
              : ""
          }
        </div>
      </div>
    `;
  }).join("");
}

function renderQuiz() {
  const box = document.getElementById("quiz-container");
  if (!box) return;

  box.innerHTML = QUIZ_QUESTIONS.map(
    (item, qIdx) => `
      <div class="quiz-item">
        <div style="font-weight:700; color:#fff;">${item.q}</div>
        <div class="quiz-options">
          ${item.options
            .map(
              (opt, oIdx) => `
            <button class="quiz-opt" onclick="checkQuizAnswer(${qIdx}, ${oIdx}, this)">
              ${escapeHtml(opt)}
            </button>
          `
            )
            .join("")}
        </div>
        <div id="quiz-fb-${qIdx}" class="quiz-feedback"></div>
      </div>
    `
  ).join("");
}

function checkQuizAnswer(qIdx, oIdx, btnEl) {
  const item = QUIZ_QUESTIONS[qIdx];
  const parent = btnEl.parentElement;
  const allBtns = parent.querySelectorAll(".quiz-opt");
  allBtns.forEach((b) => b.classList.remove("correct", "wrong"));

  const fb = document.getElementById(`quiz-fb-${qIdx}`);
  if (oIdx === item.answer) {
    btnEl.classList.add("correct");
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#34d399";
      fb.textContent = "✅ " + item.explain;
    }
  } else {
    btnEl.classList.add("wrong");
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#fda4af";
      fb.textContent = "❌ Chưa chính xác, bạn xem lại khái niệm ở Slide 1.2 rồi chọn lại nhé!";
    }
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
