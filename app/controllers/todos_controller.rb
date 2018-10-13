class TodosController < ApplicationController
  def index
  	@todos= [
  		{id: 1, title: 'Add the todos'},
  		{id: 2, title: 'Finish adding todos'},
  		{id: 2, title: 'But rex mannings album'},
  	]
  end

  def new
  end

  def create
  	byebug
  end
end
