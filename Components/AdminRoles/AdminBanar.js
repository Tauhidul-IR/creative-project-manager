import React from 'react';

const AdminBanar = () => {
  return (
    <div>

      <div className="hero min-h-screen  w-full" style={{
        backgroundImage: `url("https://d3kqdc25i4tl0t.cloudfront.net/articles/content/499_936307_management.hero.jpg")`,

      }
      }>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Creative Project Manager</h1>
            <p className="mb-5"> Admin Area </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBanar;