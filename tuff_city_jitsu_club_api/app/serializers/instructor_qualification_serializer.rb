class InstructorQualificationSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :instructor_qualifications,
    :created_at,
    :does_expire,
    :expires_at
    )

    belongs_to :user
end