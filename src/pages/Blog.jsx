import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'industry', name: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with React 18',
      excerpt: 'Learn how to leverage the latest features of React 18 to build faster and more efficient web applications.',
      category: 'web-dev',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Alex Johnson',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'The Future of Responsive Design in 2024',
      excerpt: 'Exploring emerging trends and best practices for creating truly responsive web experiences.',
      category: 'design',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Sarah Chen',
      tags: ['Design', 'Responsive', 'UI/UX']
    },
    {
      id: 3,
      title: '10 Essential Firebase Features Every Developer Should Know',
      excerpt: 'A comprehensive guide to the most powerful Firebase features for modern web development.',
      category: 'web-dev',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Mike Rodriguez',
      tags: ['Firebase', 'Backend', 'Database']
    },
    {
      id: 4,
      title: 'Optimizing Website Performance: A Practical Guide',
      excerpt: 'Practical tips and techniques to improve your website loading speed and overall performance.',
      category: 'tips',
      date: 'February 28, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Emma Wilson',
      tags: ['Performance', 'Optimization', 'SEO']
    },
    {
      id: 5,
      title: 'Creating Accessible Web Applications',
      excerpt: 'Best practices for building web applications that are accessible to everyone, regardless of ability.',
      category: 'tutorials',
      date: 'February 20, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'David Park',
      tags: ['Accessibility', 'Inclusive Design', 'Web Standards']
    },
    {
      id: 6,
      title: 'The Rise of AI in Web Development',
      excerpt: 'How artificial intelligence is transforming the way we build and interact with websites.',
      category: 'industry',
      date: 'February 15, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Lisa Thompson',
      tags: ['AI', 'Future', 'Technology']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Blog & Insights</h1>
            <p className="hero-subtitle">
              Explore articles, tutorials, and insights about AI/ML, web development, design, and technology.
            </p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Article</h2>
          </div>
          <div className="featured-post">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-badge">
                <span>Featured</span>
              </div>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="post-category">{featuredPost.category}</span>
                <span className="post-date">{featuredPost.date}</span>
                <span className="post-read-time">{featuredPost.readTime}</span>
              </div>
              <h3 className="featured-title">{featuredPost.title}</h3>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="post-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="post-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <span className="author-name">{featuredPost.author}</span>
                </div>
              </div>
              <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary">
                Read Article <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-list">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Discover the latest insights and tutorials</p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="card-category">{post.category}</div>
                  </div>
                  <div className="blog-card-content">
                    <div className="card-meta">
                      <span className="card-date">{post.date}</span>
                      <span className="card-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="card-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <div className="author-avatar-sm">
                          <i className="fas fa-user"></i>
                        </div>
                        <span className="author-name-sm">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="read-more">
                        Read More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Subscribe to my newsletter to receive the latest articles and insights directly in your inbox.</p>
            </div>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <p className="newsletter-note">
                No spam, unsubscribe at any time. Read our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="tags-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Topics</h2>
          </div>
          <div className="tags-list">
            {['HTML','CSS','React', 'JavaScript', 'AI/ML/NLP', 'Responsive Design', 'Performance', 'Firebase', 'UI/UX', 'Web Development', 'Tutorials', 'Best Practices'].map((tag, index) => (
              <Link key={index} to={`/blog?tag=${tag.toLowerCase()}`} className="tag-link">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;