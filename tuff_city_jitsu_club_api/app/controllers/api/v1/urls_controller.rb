class Api::V1::UrlsController < ApplicationController
    before_action :authenticate_user

    def create
      url = Url.new
      video = Video.find params[:video_id]
      url.video = video
      url.technique = Technique.find params[:video_id] #; unsure about this line
      if url.save
        redirect_to video_path(video), notice: "Thanks for adding a URL!"
      else
        redirect_to video_path(video), alert: "Can't add URL! URL added already?"
      end
    end

    def destroy
        video = Video.find params[:video_id]
        url = Technique.urls.find params[:id]
        url.destroy
        redirect_to video_path(video), notice: "URL removed!"
    end
end