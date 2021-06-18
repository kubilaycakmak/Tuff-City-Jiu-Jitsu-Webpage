class InstructorQualificationSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :instructorqualifications,
    :created_at,
    :does_expire,
    :expires_at
    )

    belongs_to :user
end