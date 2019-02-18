class Post < ApplicationRecord
  posts = Post.all
  puts posts

  validates(:title, presence: true, uniqueness: true)
  validates(:body, presence: true, length: { minimum: 50 })
end
