export const fetchBlog = async (url) => {
    try {
        const res = await fetch(url); // API route
        const data = await res.json();
        console.log(data)
        
        return data // Assume fetching first blog
    } catch (error) {
        console.error("Failed to fetch blog:", error);
    }
};