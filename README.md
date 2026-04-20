# 💍 Global Varan — Premium Matrimony Website

A clean, modern matrimony web application built with **React.js**, designed for Tamil Nadu and India. Under 200 lines of code.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)
![Lines](https://img.shields.io/badge/Lines%20of%20Code-172-brightgreen?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## ✨ Features

- 🌸 **Profile Browsing** — Filter by All / Brides / Grooms
- ❤️ **Save Profiles** — Like and save profiles of interest
- 💌 **Send Interest** — Contact profiles directly via modal
- 🔐 **Auth Modals** — Login and Register with gender toggle
- 💍 **Pricing Plans** — Free, Gold, and Platinum tiers
- 📱 **Responsive Design** — Works on all screen sizes
- 🔔 **Toast Notifications** — Live feedback on user actions

---

## 🖥️ Preview

| Section | Description |
|---|---|
| **Hero** | Headline, stats (5L+ members), search CTA |
| **Profiles** | Card grid with verified badges, like button, view modal |
| **How It Works** | 4-step visual guide |
| **Plans** | Free / Gold / Platinum pricing cards |
| **Footer** | Links and branding |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v16+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/global-varan.git

# 2. Navigate into the project
cd global-varan

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
global-varan/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Entry point
│   └── GlobalVaran.jsx  # Main component (172 lines)
├── package.json
└── README.md
```

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| [React.js](https://reactjs.org/) | UI framework |
| Inline CSS + CSS-in-JS | Styling (no external CSS library) |
| React Hooks (`useState`) | State management |
| [randomuser.me](https://randomuser.me/) | Sample profile photos |

---

## 📦 Sample Profiles

The app includes 6 sample profiles (4 brides, 2 grooms) with:

- Name, age, city, job
- Verified badge
- Interest tags
- Profile photo from `randomuser.me`

To add real profiles, update the `P` array in `GlobalVaran.jsx`:

```js
const P = [
  {
    id: 7,
    name: "Your Name",
    age: 27,
    city: "Chennai",
    job: "Engineer",
    photo: "https://your-photo-url.jpg",
    tags: ["Travel", "Music"],
    verified: true,
    g: "f"   // "f" for bride, "m" for groom
  },
  // ...
];
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Rose | `#b85c50` | Primary accent |
| Blush | `#e8a598` | Gradient, highlights |
| Warm White | `#f9f6f3` | Page background |
| Dark Navy | `#1a1a2e` | Text, dark cards |
| Soft Peach | `#fde8e4` | Tags, badges |

---

## 📋 Pricing Plans

| Plan | Price | Key Features |
|---|---|---|
| Free | ₹0 / Forever | Create profile, 5 views, basic search |
| Gold | ₹2,499 / 3 Months | Unlimited views, 50 contacts, horoscope match |
| Platinum | ₹4,999 / 6 Months | Dedicated manager, unlimited contacts, video calls |

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo, then:
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
# Open a Pull Request
```

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial projects.

---

## 👨‍💻 Author

**Global Varan Team**  
Made with 💍 in Tamil Nadu, India

---

> *"Connecting hearts across India — one profile at a time."*
