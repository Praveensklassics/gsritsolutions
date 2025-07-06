const BlogCardLarge = ({ image, title, date, tag }) => {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-sm font-semibold text-purple-600">{tag}</p>
          <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{date}</p>
        </div>
      </div>
    );
  };
  
  export default BlogCardLarge;
  