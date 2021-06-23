class TechniqueTypesSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :category,
    :sub_category,
    :created_at, 
    :updated_at
)
end

has_many :techniques