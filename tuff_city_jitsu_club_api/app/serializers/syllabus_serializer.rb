class SyllabusSerializer < ActiveModel::Serializer
  attributes(
  :id,
  :country,
  :user_id,
  :belt_id,
  :belts,
  :technique_types,
  :techniques
  )

  class BeltsSerializer < ActiveModel::Serializer
    attributes(
      :id, 
      :colour,
      :created_at, 
      :updated_at
    )
  end

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

  class TechniqueTypesSerializer < ActiveModel::Serializer
    attributes(
      :id, 
      :category,
      :sub_category,
      :created_at, 
      :updated_at
  )
  end

  def technique_types
    TechniqueType.where("syllabus_id = " +  object.id.to_s)
  end

  # Current stumbling block is writing the following method. Believe this requires a migration to add the syllabus id to belts, so this has now been done. Seed file will need to be adjusted accordingly.
  def belts
    Belt.where("syllabus_id = " +  object.id.to_s)
  end
  
  def techniques
    techniques_array = []
    object.technique_types.each do |x|
      techniques_array.push(Technique.find_by(technique_type_id:x.id))
    end
  end
end