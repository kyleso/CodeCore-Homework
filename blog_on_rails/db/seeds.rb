# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PASSWORD = "123"

Comment.destroy_all
Post.destroy_all
User.destroy_all

50.times do
  name = Faker::Name.unique.name
  email = Faker::Internet.email
  User.create(
    name: name,
    email: email,
    password: PASSWORD
  )
end

users = User.all

50.times do
  created_at = Faker::Date.backward(365 * 2)

  p = Post.create(
    title: Faker::Book.title,
    body: Faker::ChuckNorris.fact,
    created_at: created_at,
    updated_at: created_at,
    user: users.sample
  )

  if p.valid?
    p.comments = rand(0..25).times.map do
      Comment.new(
        body: Faker::GreekPhilosophers.quote,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
        )
    end
  end
end


