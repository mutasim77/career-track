![Banner](https://github.com/user-attachments/assets/fba1c47c-ab51-4b0b-9291-cc8bb7e215d8)
<p align="center">
  🚀 A modern job board application built with Vue 3 and Pinia for effortless job searching and posting. 💼
</p>


## 🌟 Introduction
Tired of cluttered job boards and complex application processes? CareerTrack streamlines your job search experience! 🎯💼

This project showcases the power of Vue 3 and Pinia, creating a seamless, responsive platform for job seekers and employers alike. Whether you're hunting for your dream role or looking to hire top talent, CareerTrack has got you covered!

## ✨ Features
- 🔍 Advanced job search with filters
- 📝 Easy job posting for employers
- 🔐 Admin dashboard for job management
- 📱 Fully responsive design
- 🔄 Real-time updates with Pinia store

## 🛠️ Tech Stack
- **🧠 TypeScript** - For type-safe, robust code
- **⚛️ Vue 3** - Progressive JavaScript framework for building user interfaces
- **🏪 Pinia** - Intuitive, type safe, light and flexible Store for Vue
- **🚦 Vue Router** - Official router for Vue.js
- **💅 Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **📡 JSON Server** - Full fake REST API for rapid back-end prototyping

## 🏃‍♂️ Getting Started

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/mutasim77/career-track.git
   ```
2. Install dependencies:
   ```bash
   cd career-track
   pnpm install
   ```
3. Start the project:
  ```
  make start
  ```
4. Open http://localhost:3000 in your browser 🎉

> [!IMPORTANT]
> We use a Makefile to run both the Vue app and JSON server simultaneously. This approach eliminates the need for additional libraries like concurrently, simplifying our development process.

## 🔬 Key Vue 3 Features Utilized
- **📦 Composition API:** For more flexible and reusable component logic
- **🧩 Script Setup:** Streamlined single-file component syntax
- **🔄 Reactive References:** Efficient state management with `ref` and `reactive`
- **🖥️ Computed Properties:** For derived state calculations
- **🎣 Lifecycle Hooks:** For precise control over component lifecycle

## 📊 Pinia Store Management
Pinia provides a robust state management solution:

```js
export const useJobStore = defineStore('job', () => {
  const jobs = ref<Job[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadJobs = async () => {
    // Implementation
  };

  return { jobs, loading, error, loadJobs };
});
```
> This setup allows for efficient, type-safe state management across the application.

## 📸 Preview
<img width="1300" alt="Home Page" src="https://github.com/user-attachments/assets/9e6c0a94-11d9-4a51-af4c-6caa5bafb326">
<img width="1300" alt="Jobs Page" src="https://github.com/user-attachments/assets/7913b478-f89c-4ec7-945b-bc85ce0fa714">
<img width="1300" alt="Job Detail Page" src="https://github.com/user-attachments/assets/f06f7c6a-b707-481f-a5ae-709f7e31b2fa">
<img width="1300" alt="Admin Dashboard Page" src="https://github.com/user-attachments/assets/58d8a37e-9979-4719-9d2c-c5f71b22a8ad">


## 🔮 Future Plans (TODO)
- 📱 Implement mobile app version(Web view)
- 🔔 Add notification system for new job postings
- 🤖 AI-powered job matching algorithm

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to _learn_, _inspire_, and _create_. Any contributions you make are greatly appreciated.
- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 📜 License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

Built with ❤️ by [mutasim](https://www.mutasim.top/blog)
