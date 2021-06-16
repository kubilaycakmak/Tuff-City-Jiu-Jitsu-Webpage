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
InstructorQualification.delete_all

first_aid_qualifications = "First Aid & CPR" # Here we assume that a member will qualify for both First Aid and CPR simultaneously; therefore no need for an array, a string is sufficient
instructor_qualification_array = ["Assistant Instructor", "Instructor", "Club Instructor"] # A member can only have one of these at a time, and each successive one supplants the last
# Other rules which define grading criteria: a green belt going for purple belt needs Assistant Instructor qualification, a light blue going for dark blue needs Instructor, a dark blue
# going for brown has first aid and CPR, a brown going for dan has Club Instructor. Also, first aid + CPR needs to be renewed every so many years and should go inactive here as in real life.

# When considering pseudocode for this, we should presume that any member, even a beginner white belt can have a first aid qualification obtained for whatever reason (in or out of martial
# arts), or may not, so they can randomly be assigned one. Also, we do not expect beginners to have instructor qualifications, so we can randomly assign Assistant Instructor to orange belts
# at the earliest. Then Instructor to purple at the earliest, then Club Instructor to dark blue at the earliest (they have been mandated to teach solo in this fashion, before). This is all
# arbirtrary and theoretical, but based on sound logic, and these users will be replaced by real ones in due course.

# First, we set the qualifications for the real users Seumas and David


instructor_qualification_array.each do |instructor_qualification|
    InstructorQualification.create({
        name: instructor_qualification
    })
end

# Set up a user with admin privileges
admin_user = User.create(
    first_name: "Seumas",
    last_name: "Finlayson",
    email: "seumasfinlayson@googlemail.com",
    password: PASSWORD,
    is_admin: true,
    # is_instructor: true,
    # instructor_qualification_id: instatiate this, it should be 3 for most senior club instructor
    # qualifications: ["Club Instructor", "First Aid& CPR"],
    dues_paid: true,
    owns_gi: true,
    has_first_aid_qualification: true,
    first_aid_achievement_date: 22/11/2020,
    first_aid_expiry_date: 22/11/2023,
    # training_bubble_id: "David Corbett" # The other instructor, the founder of the club and a purple belt
)
instructor_user = User.create(
    first_name: "David",
    last_name: "Corbett",
    email: "tuffcityjitsu@gmail.com",
    password: PASSWORD,
    is_admin: false,
    # is_instructor: true,
    # instructor_qualification_id: instatiate this, it should be 1 for an assistant instructor

    # qualifications: ["Assistant Instructor", "First Aid & CPR"],

    dues_paid: true,
    owns_gi: true,
    has_first_aid_qualification: true,
    # Note: the following two dates are currently just placeholders, need to ask him what they actually are in his case
    first_aid_achievement_date: 22/11/2020,
    first_aid_expiry_date: 22/11/2023, 
    # training_bubble_id: "Seumas Finlayson" # The other instructor, a brown belt new to the region
)

# Belt.create({colour:"brown"})
# Belt.create({colour:"purple"})



kyu_grade_array = ["brown", "dark blue", "light blue", "purple", "green", "orange", "yellow", "white"] # These are the "kyu" grades, the coloured belts below black
# This reverse order list means that brown will have a belt_id of 1 which matches how it is denoted as 1st Kyu, and so on going down the ladder.
dan_grade_array = ["shodan", "nidan", "sandan"] # These latter three grades are not colours, but types of black belt or "dan" grade
# As there are no dan/black belt grades in the club yet, we will just include that array for later when we do have them

kyu_grade_array.size.times do |x|
    Belt.create({
        colour:kyu_grade_array[x]
    })
end

BeltGrade.create({user_id:1,belt_id:1}) # Seumas, user_id:1, is a 1st Kyu so this id codifies his brown belt
BeltGrade.create({user_id:2,belt_id:4}) # Likewise for David the 4th Kyu aka purple belt

# Create users last
20.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@usermail.com",
    password: PASSWORD,
    dues_paid: true, # They must at least soon after signing up have their dues paid to be a regularly training member of the club
    owns_gi: true, # Ditto as with dues_paid
    # instructor_qualification_id: instatiate this
    has_first_aid_qualification: [true, false].sample
    if has_first_aid_qualification == true
        first_aid_achievement_date: Faker::Date.backward(days:365 *1)
        first_aid_expiry_date: Faker::Date.forward(days:365 *2)
    else
        first_aid_achievement_date: "",
        first_aid_expiry_date: "", # Null dates?
    end
    # training_bubble_id: "random"
    )
end


if belt_id >= 6
    # Randomly assign orange belt and above the Assistant Instructor qualification (note: a purple belt MUST have this)
    # Id 1
end

if belt_id >= 4
    # Randomly assign purple belt and above the Instructor qualification (note: a dark blue belt MUST have at least this)
end

if belt_id >= 2
    # Randomly assign dark blue and brown belts Club Instructor (note, if they don't have this, we at least expect them to have Instructor instead, and then they MUST
    # have Club Instructor for grading to black belt)
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

# Chicken and egg problem... what comes first, the users (and their belt_ids) or their instructor qualifications?

puts Cowsay.say("Generated #{User.count} users", :sheep) 
puts Cowsay.say("Generated #{BeltGrade.count} belt grades", :cow) 
puts Cowsay.say("Generated #{Belt.count} belt colours", :beavis) 
puts Cowsay.say("Generated #{InstructorQualification.count} belt colours", :frogs) 


puts "Login with #{admin_user.email} and password of '#{PASSWORD}'"