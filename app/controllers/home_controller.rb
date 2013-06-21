class HomeController < ApplicationController
  def index
  end

  def blog
    @blogs = Posting.all.sort_by{ |i| i.created_at }.reverse
  end

  def about
  end

  def contact
  end

  def vocal
    system('say -v Zarvox "Sequence aborted."')
    redirect_to root_path
  end

end
