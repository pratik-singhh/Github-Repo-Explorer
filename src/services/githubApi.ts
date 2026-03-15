import type { Repository } from "../types/Repository";
export async function searchRepositories(query: string, page: number, abort: AbortSignal): Promise<Repository[]> {
  const searchUrl = `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=10
`;


  const unparsedData = await fetch(searchUrl, { signal: abort });
  const parsedData = await unparsedData.json();
  // try again after api reset.

  if (parsedData.items) {


    let fetchedRepo: Repository[] = parsedData.items.map((element) => {


      return {
        language: element.language || "Unknown",
        description: element.description || "",
        url: element.html_url,
        name: element.name,
        stars: element.stargazers_count,
      }

    })
    return fetchedRepo;
  }
  else {
    return [];
  }


};
// const temp_repos: Repository[] = [
//   {
//     "name": "QuickSort-Visualizer",
//     "description": "An interactive web app to help students visualize sorting algorithms in real-time.",
//     "stars": 1200,
//     "language": "JavaScript",
//     "url": "https://github.com/user/quicksort-visualizer"
//   },
//   {
//     "name": "PyTorch-Transformers",
//     "description": "State-of-the-art Natural Language Processing for Pytorch and TensorFlow 2.0.",
//     "stars": 45800,
//     "language": "Python",
//     "url": "https://github.com/huggingface/pytorch-transformers"
//   },
//   {
//     "name": "Skyline-UI",
//     "description": "A lightweight, accessible component library for modern React applications.",
//     "stars": 850,
//     "language": "TypeScript",
//     "url": "https://github.com/skyline-design/skyline-ui"
//   },
//   {
//     "name": "Go-Micro-Crawler",
//     "description": "High-performance distributed web crawler built for horizontal scalability.",
//     "stars": 3400,
//     "language": "Go",
//     "url": "https://github.com/gotech/go-micro-crawler"
//   },
//   {
//     "name": "Rust-Game-Engine",
//     "description": "A data-driven game engine built with the Entity Component System architecture.",
//     "stars": 12100,
//     "language": "Rust",
//     "url": "https://github.com/bevyengine/rust-game-engine"
//   },
//   {
//     "name": "Swift-Charts-Lib",
//     "description": "Powerful and easy-to-use interactive chart library for iOS and macOS.",
//     "stars": 5600,
//     "language": "Swift",
//     "url": "https://github.com/apple/swift-charts-lib"
//   },
//   {
//     "name": "Ruby-Auth-Gems",
//     "description": "A collection of plug-and-play authentication modules for Ruby on Rails.",
//     "stars": 920,
//     "language": "Ruby",
//     "url": "https://github.com/devise/ruby-auth-gems"
//   },
//   {
//     "name": "C-Neural-Net",
//     "description": "A minimal neural network implementation written in pure C with zero dependencies.",
//     "stars": 2700,
//     "language": "C",
//     "url": "https://github.com/c-learning/c-neural-net"
//   },
//   {
//     "name": "Kotlin-Notes-App",
//     "description": "A clean architecture sample app demonstrating MVVM and Jetpack Compose.",
//     "stars": 1500,
//     "language": "Kotlin",
//     "url": "https://github.com/android/kotlin-notes-app"
//   },
//   {
//     "name": "Fast-PHP-Router",
//     "description": "The fastest routing engine for PHP based on regular expression grouping.",
//     "stars": 630,
//     "language": "PHP",
//     "url": "https://github.com/nikic/fast-php-router"
//   }
// ]
//
// return temp_repos;
//
