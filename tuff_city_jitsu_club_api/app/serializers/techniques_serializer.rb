class TechniquesSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :summary,
    :videos_id,
    :is_different,
    :difference_content,
    :technique_type_id,
    :created_at, 
    :updated_at
)
end