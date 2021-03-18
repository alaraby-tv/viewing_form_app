class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :confirmable, :timeoutable, timeout_in: 1.hour

  has_many :viewing_forms

  def full_name
    "#{first_name} #{last_name}"
  end
end
