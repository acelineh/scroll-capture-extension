# Scroll Capture Extension

這是一款專為截取「內嵌可滾動區塊」而設計的 Chrome 擴充功能，能夠自動偵測頁面中最大的 scrollable 區塊，並完整截圖並下載成 PNG 圖片。特別適用於像 momo、蝦皮、LINE 購物等電商頁面中嵌入式商品資訊、說明區塊。

---

## ✨ 功能特色

- ✅ 自動偵測最大內嵌 scroll 區塊
- ✅ 展開 scroll 容器高度，完整擷取所有內容（即使超出可見畫面）
- ✅ 支援 iframe 忽略，避免錯誤或空白區
- ✅ 一鍵截圖，自動下載 PNG 檔案
- ✅ 完全本地端執行，不上傳任何資料

---

## 🛠 安裝方式

1. 下載本專案 ZIP → 解壓縮
2. 打開 Chrome 瀏覽器，輸入網址：`chrome://extensions`
3. 開啟右上角「開發人員模式」
4. 點擊「載入未封裝項目」
5. 選擇解壓縮後的資料夾

---

## 🧪 使用方式

1. 打開任一有內嵌 scroll 區塊的網頁（如 momo 商品頁）
2. 點選擴充功能圖示（右上角 puzzle 拼圖 icon）
3. 系統會自動偵測最大 scroll 區塊、展開高度並截圖
4. 自動觸發下載圖片（PNG 格式）

---

## 🧑‍💻 技術說明

- 使用 [html2canvas](https://html2canvas.hertzen.com/) 進行畫面擷取
- 利用 JavaScript 讀取頁面中所有元素，自動偵測最大 scrollable 區塊
- 非滾動整頁，而是精準針對 scroll 容器展開與渲染

---

## 📷 示意圖（待補）

> 放入你使用擴充功能截圖的畫面～（可多張）

---

## 👨‍🎓 作者

**aceline**

---

## 📄 授權 License

本專案使用 MIT 授權，可自由修改、使用與發佈。
