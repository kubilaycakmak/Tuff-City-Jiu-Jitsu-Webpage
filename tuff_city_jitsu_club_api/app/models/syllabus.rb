class Syllabus < ApplicationRecord

    belongs_to :user
    # Uncomment out the following when these features are implemented:
    has_many videos
    # has_one semantic_tree
end