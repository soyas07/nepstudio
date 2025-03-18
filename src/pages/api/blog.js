import blogData from "@/data/blog.json";

export default function handler(req, res) {
    const { id } = req.query;
    if (!id)
        return res.status(200).json(blogData);
        
    const blog = blogData.find((blog) => blog.id === parseInt(id));
    res.status(200).json(blog);
}