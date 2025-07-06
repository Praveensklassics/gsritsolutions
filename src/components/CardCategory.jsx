import React from 'react';

export default function CategoryCard({ icon, title, count }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all w-64 text-center">
      <div className="text-purple-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{count} Courses</p>
    </div>
  );
}
