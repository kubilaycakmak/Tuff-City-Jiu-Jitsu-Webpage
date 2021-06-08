class Api::V1::SessionsController < Api::ApplicationController
    def create
        user = User.find_by(email: params[:email])
        puts params[:email]
        puts user.id
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            puts session[:user_id]
            render( 
                json: { 
                status: 200,
                logged_in: true,
                user: user
             }
            )
        else
            render(
                json: { status: 404 },
                status: 404
            )
        end
    end

    def destroy
        session[:user_id] = nil
        render(json: { status: 200}, status: 200 )
    end

end