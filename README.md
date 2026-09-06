# 🚀 AI Assignments & Projects Showcase Portfolio
คลังโครงงานและผลงานการประยุกต์ใช้ปัญญาประดิษฐ์ (AI Showcase)

เว็บไซต์สำหรับนำเสนอและแสดงผลงานการประยุกต์ใช้ AI ในหลากหลายมิติ แยกตามหัวข้อของไฟล์ PDF ที่อยู่ในโฟลเดอร์ `File` สามารถเปิดดูเอกสาร PDF แบบ Interactive ได้โดยตรงบนเว็บ พร้อมออกแบบโครงสร้าง Source Code ให้รองรับการอัปโหลดขึ้น **GitHub** ผ่าน **GitHub Desktop** และเปิดใช้งาน **GitHub Pages** เพื่อเข้าดูผ่านเว็บไซต์ได้ทันที

## 👤 ข้อมูลผู้จัดทำ

- **ชื่อผู้จัดทำ:** นาย ปิติสวัสดิ์ วรรณภูงา
- **รหัสนักศึกษา:** 2610711302004
- **คณะ:** คณะวิศวกรรมศาสตร์
- **สาขา:** วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์
- **งานที่ส่ง:** Assignment (Week 1)
- **รายวิชา:** ปัญญาประดิษฐ์เบื้องต้น
- **รหัสวิชา:** GE931-1
- **ผู้สอน:** อาจารย์ ดร.อภิมุข เมืองสุข

---

## 📂 รายการหัวข้อและไฟล์ Assignment ในโฟลเดอร์ `File/` (5 หัวข้อ)

| ลำดับ | หัวข้อผลงาน (Topic) | ชื่อไฟล์ในโฟลเดอร์ `File/` | รายละเอียดและเทคโนโลยีที่ใช้ |
|:---:|:---|:---|:---|
| **01** | **การสร้างรูปภาพด้วย AI** | `File/1. Assignment สร้างรูปด้วย AI.pdf` | เทคนิค Prompt Engineering, การสร้างภาพเชิงสร้างสรรค์ (DALL-E 3, Midjourney, Stable Diffusion, ImageFX) |
| **02** | **การสร้างกราฟคณิตศาสตร์** | `File/2. Assignment สร้างกราฟคณิตศาสตร์.pdf` | การคำนวณและสร้างกราฟฟังก์ชันคณิตศาสตร์ 2D/3D (Python Matplotlib, NumPy, Desmos, GeoGebra) |
| **03** | **การสร้าง Diagrams จาก Mermaid** | `File/3. Assignment การสร้าง diagrams จาก mermaid.pdf` | การแปลง Logic, Architecture และ Workflow เป็น Text-based Diagram (Flowchart, Sequence Diagram, Mermaid.js) |
| **04** | **การสร้างบทความ/หนังสือจาก LaTeX** | `File/assignment-4-latex.pdf` | การจัดรูปเล่มบทความวิชาการ ตำรา สมการคณิตศาสตร์ และบรรณานุกรมด้วย LaTeX และ Overleaf ร่วมกับ AI |
| **05** | **การสร้าง Slide สรุปงานด้วย NotebookLM** | `File/5. Assignment การสร้าง slide สรุปงานด้วย NotebookLM.pdf` | การสังเคราะห์เอกสารขนาดใหญ่ด้วย Source Grounding, การสกัดประเด็นสำคัญ และโครงสร้างสไลด์นำเสนอด้วย NotebookLM |

---

## ✨ คุณสมบัติเด่นของโปรเจกต์ (Features)

- 📱 **Responsive & Modern Design**: ออกแบบด้วยสไตล์โมเดิร์น สวยงาม รองรับทุกขนาดหน้าจอ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์
- 📑 **In-Page Interactive PDF Viewer**: มีหน้าต่างแสดงตัวอย่างเอกสาร PDF ในตัวของแต่ละหัวข้อ ไม่ต้องดาวน์โหลดก็เปิดอ่านได้ทันที
- 🔍 **PDF Fullscreen Modal**: สามารถกดขยายเอกสารดูแบบเต็มหน้าจอ หรือเลือกเปิดในแท็บใหม่ / ดาวน์โหลดไฟล์
- 🌗 **Dark / Light Mode**: รองรับทั้งธีมมืดและธีมสว่าง โดยตรวจจับการตั้งค่าของระบบอัตโนมัติ พร้อมปุ่มสลับธีมและบันทึกสถานะ
- 🔎 **Real-time Search & Filter**: ค้นหาหัวข้อ คำสำคัญ หรือเครื่องมือ AI ที่ต้องการได้อย่างรวดเร็ว
- 📊 **Live Mermaid Rendering**: มีการเรนเดอร์ Diagram ตัวอย่างสด ๆ บนหน้าเว็บโดยใช้ Mermaid.js
- ⚡ **Zero-Dependency Deployment**: ใช้ HTML5, CSS3, และ JavaScript ล้วน ไม่ต้องติดตั้ง Node.js หรือ build step ใด ๆ อัปโหลดขึ้น GitHub แล้วเปิด GitHub Pages ได้ทันที

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
AI/
├── index.html                                      # หน้าเว็บหลักของ Showcase Portfolio
├── style.css                                       # สไตล์ชีต Modern CSS (Dark/Light mode, Layout)
├── app.js                                          # สคริปต์ควบคุมการทำงาน (Theme, Modal, Search)
├── File/                                           # โฟลเดอร์เก็บไฟล์ PDF ทั้งหมด
│   ├── 1. Assignment สร้างรูปด้วย AI.pdf         # เอกสาร Assignment 1
│   ├── 2. Assignment สร้างกราฟคณิตศาสตร์.pdf     # เอกสาร Assignment 2
│   ├── 3. Assignment การสร้าง diagrams จาก mermaid.pdf
│   ├── assignment-4-latex.pdf                   # เอกสาร Assignment 4
│   ├── overleaf-life-thoughts.pdf               # หนังสือที่ Export จาก Overleaf
│   └── 5. Assignment การสร้าง slide สรุปงานด้วย NotebookLM.pdf
├── .github/
│   └── workflows/static.yml                       # Workflow สำหรับ Deploy ผ่าน GitHub Pages
└── README.md                                      # เอกสารประกอบโปรเจกต์และคู่มือการใช้งาน
```

---

## 🖥️ วิธีนำขึ้น GitHub โดยใช้ GitHub Desktop (ง่ายที่สุด ไม่ต้องใช้ Terminal)

เนื่องจากคุณมีโปรแกรม **GitHub Desktop** อยู่แล้ว สามารถทำตามขั้นตอนต่อไปนี้ได้ทันที:

### 1. นำโฟลเดอร์เข้าสู่ GitHub Desktop
1. เปิดโปรแกรม **GitHub Desktop**
2. ไปที่แถบเมนูด้านบน เลือก **File** > **Add Local Repository...** (หรือกดปุ่มลัด `Cmd + O`)
3. กดปุ่ม **Choose...** แล้วเลือกโฟลเดอร์โปรเจกต์ที่เก็บไฟล์ `index.html` ไว้
4. คลิกปุ่ม **Add Repository**

### 2. Commit การเปลี่ยนแปลง
- ในหน้าจอ GitHub Desktop สังเกตช่อง **Summary** ที่มุมซ้ายล่าง
- พิมพ์ข้อความ เช่น: `Add AI Showcase project and File folder`
- คลิกปุ่มสีฟ้า **Commit to main**

### 3. Publish Repository ขึ้นสู่ GitHub
- ด้านบนจะมีปุ่มสีฟ้าเขียนว่า **Publish repository** ให้คลิกปุ่มนี้
- ในหน้าต่างที่เด้งขึ้นมา:
  - **Name**: ตั้งชื่อโปรเจกต์ เช่น `AI` หรือ `ai-assignments-showcase`
  - **Keep this code private**: **เอาเครื่องหมายถูกออก (Uncheck)** เพื่อให้เป็น **Public** (จำเป็นสำหรับการเปิด GitHub Pages ฟรี)
  - คลิกปุ่ม **Publish Repository**

---

## 🌐 ขั้นตอนการเปิดใช้งาน GitHub Pages เพื่อเข้าดูผ่าน Website

เมื่อ Publish โค้ดขึ้น GitHub เสร็จแล้ว:

1. ในโปรแกรม GitHub Desktop ให้ไปที่เมนู **Repository** (ด้านบน) > เลือก **View on GitHub** (หรือกด `Cmd + Shift + G`) เพื่อเปิดหน้าเว็บ GitHub ขึ้นมา
2. ที่หน้าเว็บ GitHub ของ Repository นั้น คลิกที่แท็บ **Settings** (แถบเมนูด้านบนขวา)
3. ที่เมนูด้านซ้าย ในหมวด *Code and automation* คลิกเลือก **Pages**
4. ในส่วน **Build and deployment** ให้เลือก **Source: GitHub Actions**
   จากนั้น workflow ใน `.github/workflows/static.yml` จะ Deploy เว็บไซต์ให้อัตโนมัติเมื่อ Push ไปยัง branch `main`
5. **เข้าดูผลงาน**:
   - รอระบบ GitHub Pages ประมวลผลประมาณ 1–2 นาที
   - รีเฟรชหน้า Settings > Pages จะพบ URL สำหรับเข้าดูเว็บไซต์ เช่น:
     ```text
     https://<YOUR_USERNAME>.github.io/<REPO_NAME>/
     ```
   - สามารถคลิกเปิดดูผลงาน หรือส่งลิงก์ให้ผู้อื่นเข้าชมผ่านเบราว์เซอร์ได้ทันทีจากทุกอุปกรณ์

---

## 💻 การเปิดทดสอบดูในเครื่องคอมพิวเตอร์ (Local Preview)

- สามารถดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดดูผ่าน Google Chrome หรือ Safari ได้ทันที
