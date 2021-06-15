# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "justinbailey" # Inspired by a classic video game password

User.delete_all
Belt.delete_all
BeltGrade.delete_all

# Set up a user with admin privileges
admin_user = User.create(
    first_name: "Seumas",
    last_name: "Finlayson",
    email: "seumasfinlayson@googlemail.com",
    password: PASSWORD,
    is_admin: true,
    is_instructor: true,
    # qualifications: ["Club Instructor", "First Aid", "CPR"],
    dues_paid: true,
    owns_gi: true,
    # training_bubble_id: "David Corbett" # The other instructor, the founder of the club and a purple belt
)
instructor_user = User.create(
    first_name: "David",
    last_name: "Corbett",
    email: "tuffcityjitsu@gmail.com",
    password: PASSWORD,
    is_admin: false,
    is_instructor: true,
    # qualifications: ["Assistant Instructor", "First Aid", "CPR"],
    dues_paid: true,
    owns_gi: true,
    # training_bubble_id: "Seumas Finlayson" # The other instructor, a brown belt new to the region
)

# Belt.create({colour:"brown"})
# Belt.create({colour:"purple"})



kyu_grade_array = ["brown", "dark blue", "light blue", "purple", "green", "orange", "yellow", "white"] # These are the "kyu" grades, the coloured belts below black
dan_grade_array = ["shodan", "nidan", "sandan"] # These latter three grades are not colours, but types of black belt or "dan" grade
# As there are no dan/black belt grades in the club yet, we will just include that array for later when we do have them

kyu_grade_array.size.times do |x|
    Belt.create({
        colour:kyu_grade_array[x]
    })
end

BeltGrade.create({user_id:1,belt_id:1})
BeltGrade.create({user_id:2,belt_id:4})

20.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@usermail.com",
    password: PASSWORD,
    dues_paid: true, # They must at least soon have their dues paid to be a regularly training member of the club
    owns_gi: true, # Ditto as with dues_paid
    # training_bubble_id: "random"
    )
end

users = User.all
belts = Belt.all
# beltgrades = BeltGrade.all

20.times do
    user = users.sample
    belt = belts.sample
    puts "Generating belt grades", users.sample, belts.sample
    BeltGrade.create({
        user_id: user.id,
        belt_id: belt.id
    })
end


first_aid_qualifications = "First Aid + CPR" # Here we assume that a member will qualify for both First Aid and CPR simultaneously; therefore no need for an array, a string is sufficient
instructor_qualification_array = ["Assistant Instructor", "Instructor", "Club Instructor"] # A member can only have one of these at a time, and each successive one supplants the last
# Other rules which define grading criteria: a green belt going for purple belt needs Assistant Instructor qualification, a light blue going for dark blue needs Instructor, a dark blue
# going for brown has first aid and CPR, a brown going for dan has Club Instructor. Also, first aid + CPR needs to be renewed every so many years and should go inactive here as in real life.


puts Cowsay.say("Generated #{User.count} users", :sheep) 
puts Cowsay.say("Generated #{BeltGrade.count} belt grades", :cow) 
puts Cowsay.say("Generated #{Belt.count} belt colours", :cow) 


puts "Login with #{admin_user.email} and password of '#{PASSWORD}'"