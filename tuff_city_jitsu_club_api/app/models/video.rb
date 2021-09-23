class Video < ApplicationRecord
    has_many :techniques, dependent: :nullify
    has_many :urls, dependent: :destroy
    has_many :technique_urls, through: :urls, source: :technique
end