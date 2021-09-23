class Url < ApplicationRecord
  belongs_to :technique
  belongs_to :video
end