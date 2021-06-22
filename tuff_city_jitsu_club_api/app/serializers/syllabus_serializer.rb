class SyllabusSerializer < ActiveModel::Serializer
  attributes(
  :id,
  :country,
  :user_id,
  :belt_id,
  :technique_types,
  :techniques
  )

  def technique_types
    TechniqueType.where("syllabus_id = " +  object.id.to_s)
  end


  
  def techniques
    techniques_array = []
    object.technique_types.each do |x|
      techniques_array.push(Technique.find_by(technique_type_id:x.id))
    end
  end
end