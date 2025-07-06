import BlogCardLarge from "./BlogCardLarge";
import BlogCardSmall from "./BlogCardSmall";


const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Resources & News</h2>
          <p className="text-sm text-gray-500">Learn from blogs on trends, conversation.</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Browse Blog
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          <BlogCardLarge
          
            image="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg"
            title="10 marketing trends that you should be prepared for in 2022"
            date="July 26, 2022"
            tag="GTM"
          />
          <BlogCardLarge
            image="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/6-615x435.jpg"
            title="How to design a simple, yet unique and memorable brand identity"
            date="July 30, 2022"
            tag="GTM"
          />
        </div>

        <div className="flex flex-col gap-4">
          <BlogCardSmall
            image="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/18-615x435.jpg"
            title="Increasing engagement with Instagram and Facebook"
            tag="SCHOOL"
          />
          <BlogCardSmall
            image="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/20-615x435.jpg"
            title="Engendering a culture of professional development"
            tag="HIGH SCHOOL"
          />
          <BlogCardSmall
            image="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/17-615x435.jpg"
            title="Education Is Our Lives: We Can Change the Future"
            tag="COLLEGE"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
