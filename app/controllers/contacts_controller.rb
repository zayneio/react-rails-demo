class ContactsController < ApplicationController
  def index
  	@data = [
  		{first_name: 'john', last_name: 'smith', phone: '23942903910'},
  		{first_name: 'sammy', last_name: 'stroga', phone: '129043910'}
  	]
  	puts @data
  	render json: @data
  end
end
