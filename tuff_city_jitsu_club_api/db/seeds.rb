# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "justinbailey" # Inspired by a classic video game password

User.delete_all

# Set up a user with admin privileges
admin_user = User.create(
    first_name: "Seumas",
    last_name: "Finlayson",
    email: "seumasfinlayson@googlemail.com",
    password: PASSWORD,
    is_admin: true,
    is_instructor: true,
    belt_grade_id: "brown",
    qualifications: "Club Instructor", "First Aid",
    dues_paid: true,
    owns_gi: true,
    training_bubble_id: "David Corbett" # The other instructor, the founder of the club and a purple belt
)
20.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@usermail.com",
    password: PASSWORD,
    belt_grade_id: "random", # As in any colour from white to black inclusive
    qualifications: "random" # Note that this random combination of qualifications is constrained by the belt grade; can devise rules for these
    # They are as follows: a green belt going for purple belt needs Assistant Instructor qualification, a light blue going for dark blue needs
    # Instructor, a dark blue going for brown has first aid and CPR, a brown going for dan has Club Instructor, and each successive instructor
    # qualification supplants the previous. Also first aid needs to be renewed every so many years.
    dues_paid: true, # They must at least soon have their dues paid to be a regularly training member of the club
    owns_gi: true, # Ditto as with dues_paid
    training_bubble_id: "random"
    )
end

users = User.all

puts Cowsay.say("Generated #{User.count} users", :sheep) 
puts "Login with #{admin_user.email} and password of '#{PASSWORD}'"