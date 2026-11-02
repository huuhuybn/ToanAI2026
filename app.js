// ============================================================================
// TOAN AI 2026 — SLIDE DECK ENGINE & INTERACTIVE WIDGETS (15 SLIDES)
// ============================================================================

let currentSlide = 0;
let totalSlides = 15;

// 1. DỮ LIỆU BẢN ĐỒ PIPELINE ML (SLIDE 2)
const PIPELINE_STAGES = [
  {
    id: 0,
    step: "TRẠM 1 / 4",
    title: "1. Biểu diễn Dữ liệu bằng Toán học (Số hóa)",
    sessions: "Buổi 1, Buổi 3, Buổi 4, Buổi 10",
    mathUsed: "Đại số tuyến tính (Vector, Ma trận) & Thống kê mô tả",
    theoryExplain: "Máy tính không hiểu trực tiếp chữ viết hay hình ảnh. Toán học giúp số hóa mọi thứ: 1 đối tượng (1 hồ sơ sinh viên) được biểu diễn thành 1 Vector (danh sách các số), cả bảng dữ liệu hoặc 1 bức ảnh được biểu diễn thành 1 Ma trận (bảng 2 chiều gồm m hàng × n cột).",
    exampleMath: "Ví dụ: Hồ sơ sinh viên 𝐱 = [GPA, Số_Project, Điểm_Code, Tiếng_Anh] = [3.2, 4, 8.5, 7.0] ∈ ℝ⁴"
  },
  {
    id: 1,
    step: "TRẠM 2 / 4",
    title: "2. Mô hình Dự đoán (Hàm số Toán học)",
    sessions: "Buổi 1, Buổi 2, Buổi 4, Buổi 7, Buổi 8",
    mathUsed: "Tích vô hướng (𝐰·𝐱 + b), Hàm Sigmoid, Softmax, Định lý Bayes",
    theoryExplain: "Mô hình AI thực chất là một hàm toán học nhận đầu vào 𝐱, nhân với độ quan trọng của từng yếu tố 𝐰 (Trọng số - Weights), cộng thêm hằng số nền b (Bias), sau đó dùng hàm Sigmoid/Softmax để quy đổi ra xác suất từ 0% đến 100%.",
    exampleMath: "Công thức 1 Nơ-ron nhân tạo: ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b = ∑(wᵢ·xᵢ) + b"
  },
  {
    id: 2,
    step: "TRẠM 3 / 4",
    title: "3. Đo lường Sai số (Hàm Mất Mát - Loss Function)",
    sessions: "Buổi 2, Buổi 9",
    mathUsed: "Khoảng cách Euclidean, Hàm Logarit, Information Entropy",
    theoryExplain: "Làm sao biết mô hình đoán đúng hay sai? Toán học cung cấp Hàm Mất Mát (Loss): nếu kết quả dự đoán ŷ càng lệch xa thực tế y, giá trị Loss càng lớn. Mục tiêu của việc huấn luyện AI là ép con số Loss này về nhỏ nhất.",
    exampleMath: "Sai số trung bình bình phương (MSE): L = (1/n) ∑ (yᵢ - ŷᵢ)²"
  },
  {
    id: 3,
    step: "TRẠM 4 / 4",
    title: "4. Tối ưu hóa & Kiểm định Mô hình",
    sessions: "Buổi 5, Buổi 6, Buổi 11",
    mathUsed: "Giải tích (Đạo hàm, Gradient Descent) & Kiểm định giả thuyết (A/B Test)",
    theoryExplain: "Đạo hàm cho biết nếu tăng/giảm trọng số w một chút thì sai số Loss tăng hay giảm, từ đó máy tự động điều chỉnh w (Gradient Descent). Cuối cùng, Thống kê giúp kiểm định xem mô hình mới hiệu quả thật sự hay chỉ do ngẫu nhiên.",
    exampleMath: "Quy tắc cập nhật trọng số: w_mới = w_cũ - α · (Đạo hàm của Loss theo w)"
  }
];

// 2. DỮ LIỆU MẪU PIXEL MATRIX 8x8 (SLIDE 6)
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

// 3. CÂU HỎI QUIZ KIỂM TRA LÝ THUYẾT (SLIDE 7)
const QUIZ_QUESTIONS = [
  {
    q: "Câu 1: Khi đọc tài liệu AI thấy ký hiệu X ∈ ℝ^(100 × 5), ý nghĩa của X là gì?",
    options: [
      "A. Ma trận 100 hàng (mẫu dữ liệu) × 5 cột (đặc trưng)",
      "B. Phép nhân 100 × 5 = 500",
      "C. Một số vô hướng duy nhất",
      "D. Một vector chỉ có 1 chiều"
    ],
    answer: 0,
    explain: "Chính xác! ℝ^(m×n) là Ma trận 2 chiều có m hàng và n cột."
  },
  {
    q: "Câu 2: Ký hiệu x̄ = (1/n) ∑(i=1..n) xᵢ biểu thị phép tính gì?",
    options: [
      "A. Tìm giá trị lớn nhất trong mảng",
      "B. Cộng tổng tất cả phần tử rồi chia cho n (Trung bình cộng)",
      "C. Nhân tất cả phần tử với nhau",
      "D. Đếm số phần tử âm"
    ],
    answer: 1,
    explain: "Chuẩn luôn! ∑ xᵢ là cộng tổng, chia cho n là tính trung bình cộng."
  },
  {
    q: "Câu 3: Trong công thức 1 Nơ-ron ŷ = w₁x₁ + w₂x₂ + b, các hệ số w₁, w₂ là gì?",
    options: [
      "A. Số thứ tự của sinh viên",
      "B. Trọng số (Weights) thể hiện độ quan trọng của từng đặc trưng",
      "C. Các số ngẫu nhiên không có ý nghĩa",
      "D. Kích thước bức ảnh"
    ],
    answer: 1,
    explain: "Đúng rồi! Trọng số wᵢ quyết định mức độ ảnh hưởng của đầu vào xᵢ lên kết quả dự đoán."
  },
  {
    q: "Câu 4: Một bức ảnh đen trắng 8×8 pixel được lưu trong máy tính như thế nào?",
    options: [
      "A. Ma trận 8 dòng × 8 cột chứa các số từ 0 (đen) đến 255 (trắng)",
      "B. Một câu văn mô tả ảnh",
      "C. Một số thực duy nhất",
      "D. Không biểu diễn được bằng con số"
    ],
    answer: 0,
    explain: "Xuất sắc! Mỗi điểm ảnh là 1 con số độ sáng nằm trong ma trận 2 chiều."
  }
];

// 4. DỮ LIỆU ỨNG VIÊN CHO BÀI TẬP 3 (SLIDE 14)
let candidates = [
  { name: "Nguyễn Văn An (Bạn)", gpa: 3.4, projects: 5, coding: 8.5, english: 7.5 },
  { name: "Trần Thị Bình", gpa: 3.8, projects: 2, coding: 6.5, english: 8.5 },
  { name: "Lê Hoàng Nam", gpa: 2.7, projects: 6, coding: 9.2, english: 6.0 },
  { name: "Phạm Minh Tuấn", gpa: 2.5, projects: 1, coding: 5.0, english: 4.5 },
  { name: "Hoàng Thu Hà", gpa: 3.6, projects: 5, coding: 8.8, english: 8.0 }
];

// 5. DỮ LIỆU TỔNG KẾT 11 BUỔI (SLIDE 15)
const SYLLABUS_DATA = [
  { buoi: 1, phan: "A. Nền tảng", title: "Bản đồ Toán AI, Ký hiệu & Google Colab/NumPy", demo: "App Chấm điểm CV & Xử lý Ma trận Ảnh" },
  { buoi: 2, phan: "A. Nền tảng", title: "Hàm số, Sigmoid, Khoảng cách & KNN", demo: "App Định giá Laptop cũ / Gợi ý Phòng trọ" },
  { buoi: 3, phan: "B. ĐS Tuyến tính", title: "Vector, Cosine Similarity & Tìm kiếm Ngữ nghĩa", demo: "Máy Tìm kiếm Đồ án & So khớp CV-JD" },
  { buoi: 4, phan: "B. ĐS Tuyến tính", title: "Nhân Ma trận, Trị riêng & Giảm chiều PCA", demo: "Bản đồ Phân cụm Sinh viên 2D & Nén ảnh" },
  { buoi: 5, phan: "C. Giải tích", title: "Đạo hàm, Đạo hàm riêng & Chain Rule", demo: "Mô phỏng Lan truyền ngược 1 Nơ-ron" },
  { buoi: 6, phan: "C. Giải tích", title: "Gradient Descent & Tối ưu hóa Mô hình", demo: "Huấn luyện AI Dự đoán Giá nhà thực tế" },
  { buoi: 7, phan: "D. Xác suất", title: "Xác suất có Điều kiện & Định lý Bayes", demo: "Bộ lọc Email Spam & Phân loại Bình luận" },
  { buoi: 8, phan: "D. Xác suất", title: "Biến ngẫu nhiên, Phân phối & Hàm Softmax", demo: "Bảng điều khiển Temperature của ChatGPT" },
  { buoi: 9, phan: "D. Xác suất", title: "Kỳ vọng, Hiệp phương sai & Cross-Entropy", demo: "Công cụ Sàng lọc Đặc trưng & Đo độ tự tin AI" },
  { buoi: 10, phan: "E. Thống kê", title: "Thống kê Mô tả, Chuẩn hóa & Ước lượng MLE", demo: "Bác sĩ Dữ liệu: Làm sạch CSV & Bắt gian lận" },
  { buoi: 11, phan: "E. Thống kê", title: "Khoảng tin cậy & Kiểm định A/B Testing", demo: "Máy tính Ra quyết định A/B Testing 2 Mô hình" }
];

// ============================================================================
// KHỞI TẠO SLIDE DECK
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initSlideDeck();
  renderPipeline(0);
  updateSigmaCalc();
  renderPixelLab();
  renderQuiz();
  renderCVDemo();
  renderSyllabus();
});

function initSlideDeck() {
  const slides = document.querySelectorAll(".slide");
  totalSlides = slides.length;

  // Populate dropdown selector
  const selector = document.getElementById("slide-selector");
  if (selector) {
    selector.innerHTML = Array.from(slides)
      .map((s, idx) => {
        const title = s.getAttribute("data-title") || `Slide ${idx + 1}`;
        return `<option value="${idx}">${escapeHtml(title)}</option>`;
      })
      .join("");
  }

  // Keyboard navigation (Left/Right arrows)
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") return;

    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  goToSlide(0);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index < 0 || index >= slides.length) return;

  currentSlide = index;
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === currentSlide);
  });

  // Update counter & buttons
  const counter = document.getElementById("slide-counter");
  if (counter) counter.textContent = `${currentSlide + 1} / ${totalSlides}`;

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;

  // Update dropdown
  const selector = document.getElementById("slide-selector");
  if (selector) selector.value = String(currentSlide);

  // Update progress bar
  const fill = document.getElementById("progress-fill");
  if (fill) {
    const pct = ((currentSlide + 1) / totalSlides) * 100;
    fill.style.width = `${pct}%`;
  }

  // Highlight active section pill in topbar
  const part = slides[currentSlide].getAttribute("data-part") || "1";
  document.querySelectorAll(".part-pill").forEach((p) => p.classList.remove("active"));
  const activePill = document.getElementById(`pill-part${part}`);
  if (activePill) activePill.classList.add("active");
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

// ============================================================================
// CÁC WIDGET TƯƠNG TÁC TRÊN TỪNG SLIDE
// ============================================================================

// Slide 2: Bản đồ 4 Trạm Pipeline
function renderPipeline(activeIndex) {
  const nodes = document.querySelectorAll(".pipe-node");
  nodes.forEach((node, idx) => {
    node.classList.toggle("active", idx === activeIndex);
  });

  const stage = PIPELINE_STAGES[activeIndex];
  const detailBox = document.getElementById("pipeline-detail");
  if (!detailBox || !stage) return;

  detailBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.55rem;">
      <span class="slide-part-tag part-1-tag">${stage.step} — Học tại: ${stage.sessions}</span>
      <span class="slide-part-tag part-4-tag">Nhánh Toán: ${stage.mathUsed}</span>
    </div>
    <h3 style="font-size:1.18rem; color:#fff; margin-bottom:0.45rem;">${stage.title}</h3>
    <p style="color:var(--text-main); font-size:0.94rem; margin-bottom:0.75rem;">📐 <strong>Bản chất Lý thuyết:</strong> ${stage.theoryExplain}</p>
    <div style="background:#060911; border:1px dashed rgba(245, 158, 11, 0.45); padding:0.75rem 1rem; border-radius:8px; font-family:var(--font-mono); color:#fbbf24; font-size:0.88rem;">
      ${escapeHtml(stage.exampleMath)}
    </div>
  `;
}

// Slide 4: Máy tính Sigma & Trung bình
function updateSigmaCalc() {
  const inputs = document.querySelectorAll(".sigma-val");
  const vals = Array.from(inputs).map((el) => parseFloat(el.value) || 0);
  const n = vals.length;
  const sum = vals.reduce((a, b) => a + b, 0);
  const mean = sum / n;

  const outFormula = document.getElementById("sigma-live-result");
  if (outFormula) {
    outFormula.innerHTML = `
      <div>• Phép Tổng Sigma: <strong>&sum;(i=1&rarr;${n}) xᵢ</strong> = ${vals.join(" + ")} = <strong style="color:#fbbf24; font-size:1.08rem;">${sum.toFixed(1)}</strong></div>
      <div style="margin-top:0.25rem;">• Trung bình cộng: <strong>x̄ = (1/${n}) &sum; xᵢ</strong> = ${sum.toFixed(1)} / ${n} = <strong style="color:#34d399; font-size:1.08rem;">${mean.toFixed(2)}</strong></div>
    `;
  }
}

// Slide 6: Phòng thí nghiệm Ma trận Ảnh 8x8
function loadPixelPreset(name) {
  if (PIXEL_PRESETS[name]) {
    baseMatrix = JSON.parse(JSON.stringify(PIXEL_PRESETS[name]));
    const bSlider = document.getElementById("brightness-slider");
    const cSlider = document.getElementById("contrast-slider");
    const invCheck = document.getElementById("invert-check");
    const thresCheck = document.getElementById("threshold-check");
    if (bSlider) bSlider.value = 0;
    if (cSlider) cSlider.value = 1.0;
    if (invCheck) invCheck.checked = false;
    if (thresCheck) thresCheck.checked = false;
    renderPixelLab();
  }
}

function renderPixelLab() {
  const gridEl = document.getElementById("pixel-grid");
  const matrixTextEl = document.getElementById("numpy-matrix-output");
  if (!gridEl) return;

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

  gridEl.innerHTML = "";
  result.forEach((row, rIdx) => {
    row.forEach((val, cIdx) => {
      const cell = document.createElement("div");
      cell.className = "pixel-cell";
      cell.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
      cell.style.color = val > 135 ? "#090d16" : "#94a3b8";
      cell.textContent = val;
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
}

// Slide 7: Quick Quiz
function renderQuiz() {
  const box = document.getElementById("quiz-container");
  if (!box) return;

  box.innerHTML = QUIZ_QUESTIONS.map(
    (item, qIdx) => `
      <div class="quiz-item">
        <div style="font-weight:700; font-size:0.9rem; color:#fff;">${item.q}</div>
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
  parent.querySelectorAll(".quiz-opt").forEach((b) => b.classList.remove("correct", "wrong"));

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
      fb.textContent = "❌ Chưa đúng, bạn chọn lại nhé!";
    }
  }
}

// Slides 10 & 11: Mô phỏng chạy Cell Google Colab
function runSimulatedCell(cellId) {
  const outBox = document.getElementById(`out-${cellId}`);
  if (outBox) outBox.classList.add("visible");
}

// Slides 12 & 13: Ẩn/Hiện Đáp án Bài tập
function toggleSolution(id, btnEl) {
  const box = document.getElementById(id);
  if (!box) return;
  const isOpen = box.classList.toggle("open");
  btnEl.textContent = isOpen ? "🙈 Ẩn Đáp Án" : "💡 Xem Đáp Án Gợi Ý (GV chữa bài)";
}

// Slide 14: Bài tập 3 — Chấm điểm CV bằng Ma trận
function setCompanyPreset(preset) {
  const wGpa = document.getElementById("w-gpa");
  const wProj = document.getElementById("w-proj");
  const wCode = document.getElementById("w-code");
  const wEng = document.getElementById("w-eng");
  const bBias = document.getElementById("b-bias");

  if (preset === "product") {
    wGpa.value = 1.0; wProj.value = 1.8; wCode.value = 2.5; wEng.value = 1.2; bBias.value = 2.0;
  } else if (preset === "global") {
    wGpa.value = 2.2; wProj.value = 1.2; wCode.value = 1.5; wEng.value = 2.5; bBias.value = 1.5;
  } else {
    wGpa.value = 1.5; wProj.value = 1.5; wCode.value = 2.0; wEng.value = 1.5; bBias.value = 2.0;
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

  const scored = candidates.map((c) => {
    const rawScore = w1 * c.gpa + w2 * c.projects + w3 * c.coding + w4 * c.english + b;
    const score100 = Math.min(100, Math.round((rawScore / 52) * 100));
    const salaryM = (rawScore * 0.32).toFixed(1);
    return { ...c, rawScore, score100, salaryM };
  });

  const ranked = [...scored].sort((a, b) => b.rawScore - a.rawScore);

  const tbody = document.getElementById("cv-table-body");
  if (tbody) {
    tbody.innerHTML = ranked
      .map((item, rank) => {
        let badge = `<span class="badge-pass">Đậu (${item.salaryM} tr)</span>`;
        if (item.score100 < 55) badge = `<span class="badge-fail">Bổ sung CV</span>`;
        else if (item.score100 < 72) badge = `<span class="badge-wait">Phỏng vấn (${item.salaryM} tr)</span>`;

        return `
          <tr>
            <td><strong>#${rank + 1}</strong></td>
            <td style="font-weight:700; color:#fff;">${escapeHtml(item.name)}</td>
            <td>${item.gpa.toFixed(1)}</td>
            <td>${item.projects}</td>
            <td>${item.coding.toFixed(1)}</td>
            <td>${item.english.toFixed(1)}</td>
            <td style="font-family:var(--font-mono); color:#38bdf8; font-weight:700;">${item.rawScore.toFixed(1)}</td>
            <td>${badge}</td>
          </tr>
        `;
      })
      .join("");
  }

  const codeBox = document.getElementById("cv-python-code");
  if (codeBox) {
    const matrixRows = candidates
      .map((c) => `    [${c.gpa}, ${c.projects}, ${c.coding}, ${c.english}], # ${c.name}`)
      .join("\n");

    codeBox.textContent = `import numpy as np
X = np.array([
${matrixRows}
])
w = np.array([${w1.toFixed(1)}, ${w2.toFixed(1)}, ${w3.toFixed(1)}, ${w4.toFixed(1)}])
b = ${b.toFixed(1)}

diem_tong = np.dot(X, w) + b
luong_du_kien = np.round(diem_tong * 0.32, 1)
print("Điểm ứng viên:", diem_tong)
print("Lương đề xuất (triệu VNĐ):", luong_du_kien)`;
  }
}

// Slide 15: Lộ trình 11 Buổi
function renderSyllabus() {
  const container = document.getElementById("syllabus-container");
  if (!container) return;

  container.innerHTML = SYLLABUS_DATA.map((item) => {
    const isBuoi1 = item.buoi === 1;
    return `
      <div class="info-box" style="padding:0.85rem; border-color:${isBuoi1 ? "var(--emerald)" : "var(--border)"};">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-accent); font-weight:700; margin-bottom:0.25rem;">
          <span>BUỔI ${item.buoi} • ${item.phan}</span>
          ${isBuoi1 ? '<span style="color:#34d399;">★ Đã hoàn thành</span>' : ""}
        </div>
        <div style="font-weight:700; font-size:0.92rem; color:#fff; margin-bottom:0.35rem;">${item.title}</div>
        <div style="font-size:0.8rem; color:#fde68a;">🚀 ${item.demo}</div>
      </div>
    `;
  }).join("");
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
