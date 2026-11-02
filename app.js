// ============================================================================
// TOAN AI 2026 - INTERACTIVE LEARNING PLATFORM (BUỔI 1 & LỘ TRÌNH 11 BUỔI)
// Đối tượng: Sinh viên CNTT mất gốc Toán - Học qua Code, Trực quan & Demo thực tế
// ============================================================================

// 1. DỮ LIỆU LỘ TRÌNH 11 BUỔI
const SYLLABUS_DATA = [
  {
    buoi: 1,
    phan: "A. Nền tảng",
    title: "Bản đồ Toán trong AI & Giải mã Ký hiệu Toán bằng Code",
    mathOriginal: "Tổng quan, môi trường Python/NumPy, ký hiệu Σ, Π, vector, ma trận",
    coderView: "Mọi ký hiệu toán thực chất là mảng (Array) và vòng lặp (for/sum) trong Python",
    aiApp: "Bản đồ toán trong Pipeline ML & Mô hình 1 Nơ-ron chấm điểm",
    demo: "Mini-App: Hệ thống AI Chấm điểm CV & Dự đoán Lương Thực tập IT + Xử lý ảnh bằng Ma trận NumPy",
    status: "active"
  },
  {
    buoi: 2,
    phan: "A. Nền tảng",
    title: "Hàm số, Sigmoid, Khoảng cách & Thuật toán 'Ngưu tầm ngưu'",
    mathOriginal: "Hàm số, hàm mũ/log, hàm Sigmoid, khoảng cách Euclidean/Manhattan",
    coderView: "Biến điểm số bất kỳ thành xác suất (0% -> 100%) và đo độ giống nhau giữa 2 object",
    aiApp: "Hàm kích hoạt Sigmoid, Log-loss, thuật toán KNN",
    demo: "Mini-App: Công cụ Gợi ý Phòng trọ / Định giá Laptop cũ & Chẩn đoán Nguy cơ Bỏ học bằng KNN",
    status: "upcoming"
  },
  {
    buoi: 3,
    phan: "B. Đại số tuyến tính",
    title: "Vector, Độ tương tự Cosine & Bí mật của Tìm kiếm Ngữ nghĩa (RAG)",
    mathOriginal: "Không gian vector, tích vô hướng (Dot Product), Cosine Similarity",
    coderView: "Biến văn bản/câu hỏi thành mảng số (Embedding) để so khớp ý nghĩa thay vì trùng từ khóa",
    aiApp: "Word/Sentence Embedding, Semantic Search, Chatbot RAG",
    demo: "Mini-App: Máy Tìm kiếm Tài liệu / Đồ án & So khớp JD Tuyển dụng bằng Ngữ nghĩa (Semantic Search)",
    status: "upcoming"
  },
  {
    buoi: 4,
    phan: "B. Đại số tuyến tính",
    title: "Phép nhân Ma trận, Trị riêng & Nén dữ liệu nhiều chiều (PCA)",
    mathOriginal: "Nhân ma trận, định thức, trị riêng (Eigenvalues), vector riêng, PCA",
    coderView: "Xử lý 10.000 dòng dữ liệu cùng lúc không cần vòng lặp for & Rút gọn bảng 50 cột về 2 cột để vẽ biểu đồ",
    aiApp: "Lớp Dense trong mạng Nơ-ron & Giảm chiều dữ liệu PCA",
    demo: "Mini-App: Bản đồ Phân cụm Sinh viên / Khách hàng 2D & Nén dung lượng Ảnh bằng PCA",
    status: "upcoming"
  },
  {
    buoi: 5,
    phan: "C. Giải tích",
    title: "Đạo hàm & Chain Rule: Cách Mạng Nơ-ron 'Truy tìm Thủ phạm' gây lỗi",
    mathOriginal: "Đạo hàm, đạo hàm riêng, quy tắc chuỗi (Chain Rule)",
    coderView: "Khi kết quả đầu ra bị sai, nhích nhẹ từng biến đầu vào xem biến nào làm lỗi tăng/giảm mạnh nhất",
    aiApp: "Lan truyền ngược (Backpropagation) trên 1 Nơ-ron",
    demo: "Mini-App: Trình mô phỏng Huấn luyện Nơ-ron Trực quan (Tự động dò tìm công thức ẩn từ dữ liệu)",
    status: "upcoming"
  },
  {
    buoi: 6,
    phan: "C. Giải tích",
    title: "Gradient Descent & Tối ưu hóa: Dạy Máy tự Học từ Sai lầm",
    mathOriginal: "Vector Gradient, cực trị hàm nhiều biến, thuật toán Gradient Descent",
    coderView: "Thuật toán 'Xuống núi trong sương mù' & Cách chọn tốc độ học (Learning Rate) không bị văng khỏi dốc",
    aiApp: "Gradient Descent, Learning Rate, Huấn luyện mô hình AI thực tế",
    demo: "Mini-App: Huấn luyện AI Nhận diện Khuôn mặt / Cử chỉ tay qua Webcam & Web App Dự đoán Giá nhà",
    status: "upcoming"
  },
  {
    buoi: 7,
    phan: "D. Xác suất",
    title: "Xác suất có Điều kiện & Định lý Bayes: Tư duy Bắt bệnh và Lọc Spam",
    mathOriginal: "Xác suất cơ bản, xác suất có điều kiện P(A|B), định lý Bayes",
    coderView: "Cập nhật niềm tin khi có bằng chứng mới: Thấy từ 'Trúng thưởng' thì bao nhiêu % là mail rác?",
    aiApp: "Thuật toán phân loại văn bản Naive Bayes",
    demo: "Mini-App: Bộ lọc Tin nhắn Rác & Phân loại Bình luận Shopee/Tiki (Khen/Chê) tự động",
    status: "upcoming"
  },
  {
    buoi: 8,
    phan: "D. Xác suất",
    title: "Biến ngẫu nhiên, Phân phối Chuẩn & Giải mã Softmax trong ChatGPT",
    mathOriginal: "Biến ngẫu nhiên rời rạc/liên tục, phân phối chuẩn (Gaussian), hàm Softmax",
    coderView: "Cách AI chọn từ tiếp theo khi sinh văn bản & Tại sao khởi tạo trọng số ngẫu nhiên lại quan trọng?",
    aiApp: "Hàm Softmax (Phân loại đa lớp), Temperature trong LLM, Khởi tạo trọng số",
    demo: "Mini-App: Bảng điều khiển Hộp đen LLM (Tuỳ biến Temperature/Top-k để điều khiển độ sáng tạo của AI)",
    status: "upcoming"
  },
  {
    buoi: 9,
    phan: "D. Xác suất",
    title: "Kỳ vọng, Hiệp phương sai & Entropy: Đo lường Độ bất định của AI",
    mathOriginal: "Kỳ vọng, phương sai, ma trận hiệp phương sai, Information Entropy",
    coderView: "Chọn đặc trưng (Feature) nào có nhiều thông tin nhất & Đo xem mô hình AI đang 'tự tin' hay 'đoán mò'",
    aiApp: "Hàm mất mát Cross-Entropy Loss & Phân tích tương quan đặc trưng (Correlation)",
    demo: "Mini-App: Công cụ Tự động Sàng lọc Biến rác (Feature Selector) & Dashboard Đo độ Tự tin của AI",
    status: "upcoming"
  },
  {
    buoi: 10,
    phan: "E. Thống kê",
    title: "Thống kê Mô tả, Chuẩn hóa & Ước lượng Hợp lý Cực đại (MLE)",
    mathOriginal: "Mean, Median, Quantile, Z-score Normalization, Min-Max Scaling, MLE",
    coderView: "Làm sạch dữ liệu bẩn, bắt điểm dị biệt (Outliers) và đưa các cột về cùng một thang đo trước khi nạp vào AI",
    aiApp: "Khám phá dữ liệu (EDA), Feature Scaling & Phát hiện bất thường",
    demo: "Mini-App: Bác sĩ Dữ liệu (Upload file CSV bất kỳ -> Tự động làm sạch, chuẩn hóa & bắt giao dịch gian lận)",
    status: "upcoming"
  },
  {
    buoi: 11,
    phan: "E. Thống kê",
    title: "Khoảng tin cậy & Kiểm định Giả thuyết: A/B Testing hai Mô hình AI",
    mathOriginal: "Khoảng tin cậy (Confidence Interval), p-value, t-test, kiểm định giả thuyết",
    coderView: "Mô hình AI mới tăng 2% độ chính xác là 'giỏi thật' hay chỉ 'ăn may' trên tập test?",
    aiApp: "A/B Testing trong Sản phẩm Công nghệ & So sánh hiệu năng 2 mô hình ML",
    demo: "Mini-App: Máy tính Quyết định A/B Testing cho Kỹ sư AI & Product Manager (Ra quyết định Release hay Rollback)",
    status: "upcoming"
  }
];

// 2. DỮ LIỆU BẢN ĐỒ PIPELINE ML (4 TRẠM)
const PIPELINE_STAGES = [
  {
    id: 0,
    step: "TRẠM 1 / 4",
    title: "1. Biểu diễn & Tiền xử lý Dữ liệu",
    sub: "Ảnh, Text, Bảng -> Mảng số (NumPy Array)",
    sessions: "Buổi 1, Buổi 3, Buổi 4, Buổi 10",
    mathUsed: "Vector, Ma trận (Đại số tuyến tính) & Thống kê mô tả, Chuẩn hóa (Thống kê)",
    coderExplain: "Máy tính không hiểu chữ 'Đẹp trai' hay bức ảnh con mèo. Bạn phải biến bức ảnh thành mảng 2 chiều lưu độ sáng pixel, biến câu chữ thành mảng số (Vector Embedding), và chuẩn hóa bảng dữ liệu về cùng thang đo.",
    codeSnippet: `# Biến 1 hồ sơ ứng viên thành Vector NumPy (Mảng 1D)
import numpy as np
ung_vien_x = np.array([3.2, 4, 8.5, 7.0]) # [GPA, Số_Project, Điểm_Code, Tiếng_Anh]

# Chuẩn hóa dữ liệu (Z-score - Buổi 10)
X_clean = (X - np.mean(X, axis=0)) / np.std(X, axis=0)`
  },
  {
    id: 1,
    step: "TRẠM 2 / 4",
    title: "2. Mô hình Dự đoán (Forward Pass)",
    sub: "Kết hợp đầu vào + Trọng số -> Kết quả dự đoán",
    sessions: "Buổi 1, Buổi 2, Buổi 4, Buổi 7, Buổi 8",
    mathUsed: "Phép nhân Ma trận (w·x + b), Hàm Sigmoid/Softmax, Định lý Bayes",
    coderExplain: "Mô hình AI thực chất là một hàm nhận vào mảng đặc trưng x, nhân với bộ trọng số quan trọng w (Weights), cộng điểm cơ sở b (Bias), rồi ép qua hàm Sigmoid/Softmax để ra xác suất từ 0% đến 100%.",
    codeSnippet: `# Phép nhân tích vô hướng (Dot Product) trong 1 Nơ-ron (Buổi 1)
diem_so = np.dot(ung_vien_x, trong_so_w) + bias_b

# Ép điểm số về xác suất đậu phỏng vấn 0 -> 1 bằng Sigmoid (Buổi 2)
xac_suat_dau = 1 / (1 + np.exp(-diem_so))`
  },
  {
    id: 2,
    step: "TRẠM 3 / 4",
    title: "3. Đo lường Sai số (Loss Function)",
    sub: "So sánh Dự đoán của AI vs Thực tế",
    sessions: "Buổi 2, Buổi 9",
    mathUsed: "Khoảng cách, Trung bình bình phương sai số (MSE), Hàm Log & Cross-Entropy",
    coderExplain: "Làm sao máy biết nó đang đoán ngu hay đoán khôn? Ta dùng hàm Loss để phạt: nếu thực tế là 1 (Đậu) mà AI đoán 0.01 (Rớt), hàm Log-loss / Cross-Entropy sẽ phạt một con số cực lớn!",
    codeSnippet: `# Sai số trung bình bình phương (MSE - Dùng khi dự đoán Lương/Giá nhà)
mse_loss = np.mean((luong_thuc_te - luong_du_doan) ** 2)

# Cross-Entropy Loss (Buổi 2 & Buổi 9 - Dùng khi phân loại Đậu/Rớt)
log_loss = -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))`
  },
  {
    id: 3,
    step: "TRẠM 4 / 4",
    title: "4. Tự Sửa Sai & Kiểm định (Training & Eval)",
    sub: "Cập nhật Trọng số w & Kiểm tra A/B Test",
    sessions: "Buổi 5, Buổi 6, Buổi 11",
    mathUsed: "Đạo hàm riêng, Chain Rule, Gradient Descent (Giải tích) & Kiểm định giả thuyết (Thống kê)",
    coderExplain: "Đạo hàm giúp tìm hướng dốc để chỉnh lại bộ trọng số w sao cho lần sau đoán ít sai hơn (Gradient Descent). Cuối cùng, dùng Kiểm định Thống kê (Buổi 11) để chứng minh mô hình mới tốt thật chứ không phải ăn may.",
    codeSnippet: `# Cập nhật trọng số bằng Gradient Descent (Buổi 5 & 6)
trong_so_w = trong_so_w - learning_rate * dao_ham_w

# Sau khi huấn luyện xong -> Đem đi A/B Testing (Buổi 11)`
  }
];

// 3. DỮ LIỆU TỪ ĐIỂN DỊCH KÝ HIỆU TOÁN -> CODE PYTHON
const TRANSLATOR_DATA = {
  vector: {
    title: "1. Vô hướng (Scalar), Vector & Ma trận (Matrix)",
    mathFormula: "x ∈ ℝ,   𝐱 ∈ ℝⁿ,   𝐗 ∈ ℝᵐˣⁿ",
    fearText: "Đọc sách AI thấy ký hiệu x ∈ ℝᵈ hay X ∈ ℝᵐˣⁿ là muốn gấp sách vì tưởng không gian đa chiều trừu tượng.",
    coderText: "• x ∈ ℝ (Vô hướng): Chỉ là 1 biến kiểu float/int bình thường.\n• 𝐱 ∈ ℝⁿ (Vector): Chính là Mảng 1 chiều (1D Array) có n phần tử (VD: 1 dòng dữ liệu của 1 sinh viên).\n• 𝐗 ∈ ℝᵐˣⁿ (Ma trận): Chính là Bảng dữ liệu / Mảng 2 chiều có m dòng (m sinh viên) và n cột (n thuộc tính).",
    code: `import numpy as np

# 1. Vô hướng (Scalar): x ∈ R
luong_co_ban = 5.0  

# 2. Vector: x ∈ R^4 (Mảng 1 chiều gồm 4 con số của 1 sinh viên)
sv_an = np.array([3.5, 5, 8.0, 6.5]) 
print("Số chiều (shape) của Vector:", sv_an.shape) # Kết quả: (4,)

# 3. Ma trận: X ∈ R^(3x4) (Bảng gồm 3 sinh viên, mỗi người 4 thông số)
danh_sach_sv = np.array([
    [3.5, 5, 8.0, 6.5],  # Sinh viên 1
    [2.8, 2, 6.0, 5.0],  # Sinh viên 2
    [3.9, 8, 9.5, 8.5]   # Sinh viên 3
])
print("Kích thước Ma trận (dòng, cột):", danh_sach_sv.shape) # Kết quả: (3, 4)`
  },
  sigma: {
    title: "2. Ký hiệu Tổng Sigma (Σ) và Trung bình cộng (μ)",
    mathFormula: "S = ∑(i=1..n) xᵢ    và    x̄ = (1/n) ∑(i=1..n) xᵢ",
    fearText: "Thấy chữ Hy Lạp khổng lồ ∑ với chỉ số trên dưới i=1 đến n cảm giác như toán cao cấp.",
    coderText: "• Chữ ∑ (Sigma) dịch sang tiếng lập trình chính là vòng lặp for cộng dồn, hoặc hàm sum()!\n• Có thêm (1/n) phía trước ∑ nghĩa là cộng tổng xong đem chia cho số phần tử -> chính là hàm tính trung bình np.mean()!",
    code: `import numpy as np

diem_so = np.array([7.0, 8.5, 6.5, 9.0, 8.0])

# Cách 1: Viết bằng vòng lặp for (Đúng nghĩa đen của ký hiệu ∑)
tong = 0
for x_i in diem_so:
    tong += x_i
trung_binh = tong / len(diem_so)

# Cách 2: Viết bằng NumPy (Nhanh gấp hàng trăm lần trên dữ liệu lớn!)
tong_np = np.sum(diem_so)        # Chính là ∑ x_i
trung_binh_np = np.mean(diem_so) # Chính là (1/n) ∑ x_i`
  },
  dot: {
    title: "3. Tích vô hướng (Dot Product) = Trái tim của 1 Nơ-ron Nhân tạo",
    mathFormula: "ŷ = ∑(i=1..n) wᵢ·xᵢ + b = 𝐰ᵀ𝐱 + b",
    fearText: "Ký hiệu wᵀx + b xuất hiện ở mọi bài báo Deep Learning, nhìn tưởng phép biến đổi hình học phức tạp.",
    coderText: "• Thực chất nó giống hệt cách trường đại học tính Điểm Tổng Kết Môn của bạn:\n  Điểm = (0.1 × Chuyên_cần) + (0.3 × Giữa_kỳ) + (0.6 × Cuối_kỳ) + Điểm_cộng\n• Trong đó: [0.1, 0.3, 0.6] là Trọng số (w), điểm của bạn là (x), điểm cộng ưu tiên là Bias (b).\n• Trong NumPy, toàn bộ cụm ∑ wᵢ·xᵢ được tính chỉ bằng 1 lệnh: np.dot(w, x)!",
    code: `import numpy as np

# Điểm thành phần của bạn (Vector x): [Chuyên cần, Giữa kỳ, Cuối kỳ]
diem_sv = np.array([9.0, 7.5, 8.0])

# Trọng số môn học (Vector w): [10%, 30%, 60%]
trong_so = np.array([0.1, 0.3, 0.6])

# Điểm cộng khuyến khích (Bias b)
diem_cong = 0.2

# Tính điểm tổng kết bằng 1 Nơ-ron (w · x + b)
diem_tong_ket = np.dot(trong_so, diem_sv) + diem_cong
print("Điểm tổng kết:", diem_tong_ket) # 9*0.1 + 7.5*0.3 + 8*0.6 + 0.2 = 8.15`
  }
};

// 4. DỮ LIỆU MẪU PIXEL MATRIX 8x8 (PHÒNG THÍ NGHIỆM ẢNH)
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

// 5. DỮ LIỆU DEMO CUỐI BUỔI: HỆ THỐNG CHẤM CV & DỰ ĐOÁN LƯƠNG IT
let candidates = [
  { name: "Nguyễn Văn An (Bạn)", gpa: 3.2, projects: 4, coding: 8.0, english: 7.0 },
  { name: "Trần Thị Bình", gpa: 3.8, projects: 2, coding: 6.5, english: 8.5 },
  { name: "Lê Hoàng Nam", gpa: 2.7, projects: 6, coding: 9.2, english: 6.0 },
  { name: "Phạm Minh Tuấn", gpa: 2.5, projects: 1, coding: 5.0, english: 4.5 },
  { name: "Hoàng Thu Hà", gpa: 3.6, projects: 5, coding: 8.8, english: 8.0 }
];

// 6. CÂU HỎI QUIZ KIỂM TRA NHANH BUỔI 1
const QUIZ_QUESTIONS = [
  {
    q: "Câu 1: Khi đọc tài liệu AI thấy viết X ∈ ℝ^(100 × 5), với góc nhìn của sinh viên CNTT, bạn hiểu X là gì?",
    options: [
      "A. Một bảng dữ liệu (Mảng 2 chiều) gồm 100 dòng (mẫu dữ liệu) và 5 cột (thuộc tính)",
      "B. Một phép lũy thừa lấy 100 nhân với 5",
      "C. Một biến số thực duy nhất có giá trị bằng 500",
      "D. Một hàm đệ quy chạy 100 lần"
    ],
    answer: 0,
    explain: "Chính xác! ℝ^(m×n) đơn giản là mảng 2 chiều (Matrix / DataFrame) có m hàng và n cột."
  },
  {
    q: "Câu 2: Ký hiệu toán học y = (1/n) ∑(i=1..n) xᵢ tương đương với hàm nào trong thư viện NumPy?",
    options: [
      "A. np.max(x)",
      "B. np.mean(x)",
      "C. np.dot(x, n)",
      "D. np.shape(x)"
    ],
    answer: 1,
    explain: "Chuẩn luôn! ∑ xᵢ là cộng tổng các phần tử, chia cho n là tính trung bình cộng: np.mean(x)."
  },
  {
    q: "Câu 3: Một bức ảnh đen trắng kích thước 28×28 pixel được máy tính lưu trữ như thế nào để đưa vào mô hình AI?",
    options: [
      "A. Một file văn bản chứa lời mô tả bức ảnh",
      "B. Một ma trận 28 dòng × 28 cột chứa các con số từ 0 (đen) đến 255 (trắng)",
      "C. Một số nguyên duy nhất",
      "D. Máy tính tự nhìn bằng mắt như con người, không cần chuyển thành số"
    ],
    answer: 1,
    explain: "Đúng rồi! Mọi bức ảnh đen trắng đều là Ma trận 2 chiều lưu cường độ sáng của từng điểm ảnh (pixel)."
  },
  {
    q: "Câu 4: Công thức của 1 Nơ-ron nhân tạo ŷ = w₁x₁ + w₂x₂ + w₃x₃ + b được viết gọn bằng 1 dòng NumPy nào sau đây?",
    options: [
      "A. np.sum(w + x) * b",
      "B. np.dot(w, x) + b",
      "C. np.mean(w) + np.mean(x)",
      "D. w / x + b"
    ],
    answer: 1,
    explain: "Xuất sắc! Tích vô hướng np.dot(w, x) tự động nhân từng cặp wᵢ * xᵢ rồi cộng tổng lại, sau đó cộng thêm bias b."
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
  renderCVDemo();
  renderSyllabus();
  renderQuiz();
});

// Chuyển đổi các Tab chính trên thanh điều hướng
function initNavigation() {
  const buttons = document.querySelectorAll(".nav-btn");
  const panels = document.querySelectorAll(".view-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const activePanel = document.getElementById(target);
      if (activePanel) activePanel.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Chuyển nhanh sang tab cụ thể từ nút bấm bên trong trang
function switchTab(targetId) {
  const btn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
  if (btn) btn.click();
}

// ----------------------------------------------------------------------------
// PHẦN 1: BẢN ĐỒ PIPELINE ML
// ----------------------------------------------------------------------------
function renderPipeline(activeIndex) {
  const nodes = document.querySelectorAll(".pipe-node");
  nodes.forEach((node, idx) => {
    node.classList.toggle("active", idx === activeIndex);
  });

  const stage = PIPELINE_STAGES[activeIndex];
  const detailBox = document.getElementById("pipeline-detail");
  if (!detailBox) return;

  detailBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
      <span class="tag tag-blue">${stage.step} — Học tại: ${stage.sessions}</span>
      <span class="tag tag-purple">Toán sử dụng: ${stage.mathUsed}</span>
    </div>
    <h3 style="font-size:1.25rem; color:#fff; margin-bottom:0.5rem;">${stage.title}</h3>
    <p style="color:var(--text-main); margin-bottom:1rem;">💡 <strong>Góc nhìn Dân Code:</strong> ${stage.coderExplain}</p>
    <pre class="code-block">${escapeHtml(stage.codeSnippet)}</pre>
  `;
}

// ----------------------------------------------------------------------------
// PHẦN 2: TỪ ĐIỂN KÝ HIỆU TOÁN -> CODE PYTHON
// ----------------------------------------------------------------------------
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
        <span class="panel-label" style="color:#fbbf24;">📐 Ký hiệu trong sách Toán / Paper AI</span>
        <h3 style="color:#fff;">${item.title}</h3>
        <div class="math-formula">${item.mathFormula}</div>
        <p style="color:#fda4af; font-size:0.92rem; margin-bottom:0.75rem;">
          <strong>😰 Nỗi sợ mất gốc:</strong> ${item.fearText}
        </p>
        <p style="color:#6ee7b7; font-size:0.94rem; white-space:pre-line;">
          <strong>😎 Dịch sang ngôn ngữ CNTT:</strong>\n${item.coderText}
        </p>
      </div>
      <div class="code-panel">
        <span class="panel-label" style="color:#38bdf8;">💻 Code Python / NumPy tương đương</span>
        <pre class="code-block">${escapeHtml(item.code)}</pre>
      </div>
    </div>
  `;
}

// Máy tính trực tiếp Sigma & Trung bình
function updateSigmaCalc() {
  const inputs = document.querySelectorAll(".sigma-val");
  const vals = Array.from(inputs).map((el) => parseFloat(el.value) || 0);
  const n = vals.length;
  const sum = vals.reduce((a, b) => a + b, 0);
  const mean = sum / n;

  const outFormula = document.getElementById("sigma-live-result");
  if (outFormula) {
    outFormula.innerHTML = `
      <div>• Mảng Python: <code>x = np.array([${vals.join(", ")}])</code> &rarr; Số phần tử <code>n = ${n}</code></div>
      <div style="margin-top:0.35rem;">• Tổng Sigma <strong>∑ xᵢ</strong> = <code>np.sum(x)</code> = ${vals.join(" + ")} = <strong style="color:#fbbf24; font-size:1.1rem;">${sum.toFixed(1)}</strong></div>
      <div style="margin-top:0.35rem;">• Trung bình <strong>(1/n) ∑ xᵢ</strong> = <code>np.mean(x)</code> = ${sum.toFixed(1)} / ${n} = <strong style="color:#34d399; font-size:1.1rem;">${mean.toFixed(2)}</strong></div>
    `;
  }
}

// ----------------------------------------------------------------------------
// PHẦN 3: PHÒNG THÍ NGHIỆM MA TRẬN ẢNH 8x8 (PIXEL MATRIX SANDBOX)
// ----------------------------------------------------------------------------
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
  const codeGenEl = document.getElementById("pixel-numpy-code");
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
      cell.title = `Hàng ${rIdx}, Cột ${cIdx} (Click để vẽ/xóa pixel)`;
      cell.addEventListener("click", () => {
        baseMatrix[rIdx][cIdx] = baseMatrix[rIdx][cIdx] > 128 ? 0 : 250;
        renderPixelLab();
      });
      gridEl.appendChild(cell);
    });
  });

  // Hiển thị ma trận NumPy 2D
  if (matrixTextEl) {
    const formattedRows = result.map(
      (r) => "  [" + r.map((v) => String(v).padStart(3, " ")).join(", ") + "]"
    );
    matrixTextEl.textContent = `img = np.array([\n${formattedRows.join(",\n")}\n]) # shape: (8, 8)`;
  }

  // Sinh code Python tương ứng với thao tác thanh trượt
  if (codeGenEl) {
    let lines = [
      `import numpy as np`,
      `# 1. Ảnh gốc là ma trận 2 chiều 8x8 (giá trị 0 -> 255)`,
      `out = img.astype(float)`
    ];
    if (c !== 1 || b !== 0) {
      lines.push(`# 2. Phép nhân & cộng vô hướng với Ma trận (Tương phản * ${c.toFixed(1)}, Độ sáng ${b >= 0 ? "+" : ""}${b})`);
      lines.push(`out = np.clip(out * ${c.toFixed(1)} + (${b}), 0, 255)`);
    }
    if (invert) {
      lines.push(`# 3. Đảo ngược màu ảnh (Âm bản)`);
      lines.push(`out = 255 - out`);
    }
    if (threshold) {
      lines.push(`# 4. Nhị phân hóa ảnh (Tách nền chữ cho AI OCR)`);
      lines.push(`out = np.where(out >= 128, 255, 0)`);
    }
    lines.push(`print("Độ sáng trung bình toàn ảnh:", np.mean(out).round(1))`);
    codeGenEl.textContent = lines.join("\n");
  }
}

// ----------------------------------------------------------------------------
// PHẦN 4: SẢN PHẨM DEMO CUỐI BUỔI — SMART IT CV SCORER & SALARY PREDICTOR
// ----------------------------------------------------------------------------
function setCompanyPreset(preset) {
  const wGpa = document.getElementById("w-gpa");
  const wProj = document.getElementById("w-proj");
  const wCode = document.getElementById("w-code");
  const wEng = document.getElementById("w-eng");
  const bBias = document.getElementById("b-bias");

  if (preset === "product") {
    // Công ty Product / AI Startup: Ưu tiên Code & Project thực chiến
    wGpa.value = 1.0;
    wProj.value = 1.8;
    wCode.value = 2.5;
    wEng.value = 1.2;
    bBias.value = 2.0;
  } else if (preset === "global") {
    // Tập đoàn Đa quốc gia / Outsourcing Quốc tế: Ưu tiên Tiếng Anh & GPA
    wGpa.value = 2.2;
    wProj.value = 1.2;
    wCode.value = 1.5;
    wEng.value = 2.5;
    bBias.value = 1.5;
  } else if (preset === "fresher") {
    // Chương trình Thực tập sinh Tài năng: Cân bằng
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

  // Cập nhật nhãn thanh trượt
  document.getElementById("val-w-gpa").textContent = w1.toFixed(1);
  document.getElementById("val-w-proj").textContent = w2.toFixed(1);
  document.getElementById("val-w-code").textContent = w3.toFixed(1);
  document.getElementById("val-w-eng").textContent = w4.toFixed(1);
  document.getElementById("val-b-bias").textContent = b.toFixed(1);

  // Tính điểm cho toàn bộ ứng viên bằng phép nhân Ma trận X · w + b
  const scored = candidates.map((c, idx) => {
    const rawScore = w1 * c.gpa + w2 * c.projects + w3 * c.coding + w4 * c.english + b;
    // Quy đổi sang thang 100 hợp lý và mức lương thực tập dự kiến (triệu VNĐ/tháng)
    const score100 = Math.min(100, Math.round((rawScore / 52) * 100));
    const salaryM = (rawScore * 0.32).toFixed(1);
    return { ...c, idx, rawScore, score100, salaryM };
  });

  // Sắp xếp từ cao xuống thấp
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

  // Cập nhật công thức giải thích trực tiếp cho ứng viên #1
  const top1 = ranked[0];
  const formulaEl = document.getElementById("cv-live-formula");
  if (formulaEl && top1) {
    formulaEl.innerHTML = `
      <div>🎯 <strong>Giải thích phép tính Nơ-ron (<code>np.dot(X, w) + b</code>) cho Top #1 (${escapeHtml(top1.name)}):</strong></div>
      <div style="font-family:var(--font-mono); color:#fbbf24; margin-top:0.35rem;">
        ŷ = (${w1.toFixed(1)} × ${top1.gpa}) + (${w2.toFixed(1)} × ${top1.projects}) + (${w3.toFixed(1)} × ${top1.coding}) + (${w4.toFixed(1)} × ${top1.english}) + ${b.toFixed(1)}
        = <strong>${top1.rawScore.toFixed(2)} điểm</strong> &rarr; Lương đề xuất: <strong>${top1.salaryM} triệu VNĐ</strong>
      </div>
    `;
  }

  // Sinh code Python + Gradio tự động theo đúng bộ trọng số học viên vừa chỉnh
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

# 2. Vector Trọng số tuyển dụng w ∈ R^4 và Điểm sàn b (Do bạn vừa thiết lập)
w = np.array([${w1.toFixed(1)}, ${w2.toFixed(1)}, ${w3.toFixed(1)}, ${w4.toFixed(1)}])
b = ${b.toFixed(1)}

# 3. Chấm điểm đồng loạt toàn bộ ứng viên bằng 1 dòng Nhân Ma Trận (Không cần vòng lặp for!)
diem_tong = np.dot(X, w) + b
luong_du_kien = np.round(diem_tong * 0.32, 1)

for i, diem in enumerate(diem_tong):
    print(f"Ứng viên {i+1}: {diem:.1f} điểm -> Lương thực tập đề xuất: {luong_du_kien[i]} triệu VNĐ")`;
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

  // Nếu trùng tên ứng viên đầu tiên thì cập nhật, ngược lại thêm mới lên đầu
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
    btnEl.textContent = "✅ Đã Copy Code!";
    setTimeout(() => {
      btnEl.textContent = oldText;
    }, 1800);
  });
}

// ----------------------------------------------------------------------------
// PHẦN 5: RENDER LỘ TRÌNH 11 BUỔI
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
          <h3 style="font-size:1.15rem; color:#fff; margin-bottom:0.5rem;">${item.title}</h3>
          <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:0.5rem;">
            <strong>Kiến thức gốc:</strong> ${item.mathOriginal}
          </p>
          <p style="font-size:0.9rem; color:#93c5fd; margin-bottom:0.5rem;">
            💡 <strong>Góc nhìn CNTT:</strong> ${item.coderView}
          </p>
          <p style="font-size:0.88rem; color:#c4b5fd;">
            🤖 <strong>Ứng dụng AI:</strong> ${item.aiApp}
          </p>
        </div>
        <div>
          <div class="session-demo-box">
            <strong>🚀 Sản phẩm tự làm cuối buổi:</strong><br/>
            <span style="color:#fde68a;">${item.demo}</span>
          </div>
          ${
            isBuoi1
              ? `<button class="btn-primary" style="width:100%; margin-top:0.85rem;" onclick="switchTab('tab-buoi1')">Vào học & Thực hành Buổi 1 &rarr;</button>`
              : ""
          }
        </div>
      </div>
    `;
  }).join("");
}

// ----------------------------------------------------------------------------
// PHẦN 6: QUIZ KIỂM TRA PHẢN XẠ
// ----------------------------------------------------------------------------
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
      fb.textContent = "❌ Chưa đúng rồi! Bạn thử suy nghĩ theo góc nhìn mảng NumPy và chọn lại xem nhé.";
    }
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
