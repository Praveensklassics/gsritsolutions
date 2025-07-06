const BlogCardSmall = ({ image, title, tag }) => {
    return (
      <div className="flex gap-4 items-start">
        <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <p className="text-xs font-bold text-purple-600">{tag}</p>
          <p className="text-sm font-semibold text-gray-700">{title}</p>
        </div>
      </div>
    );
  };
  
  export default BlogCardSmall;
  