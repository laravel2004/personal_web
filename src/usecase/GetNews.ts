export default async function getNews() {
  try {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95465d70701f49e29d2008488ac131ee");
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}