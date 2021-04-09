class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable,
         :recoverable, :rememberable, :trackable, :confirmable, :timeoutable, timeout_in: 1.hour

  has_many :viewing_forms
  validates :first_name, :last_name, presence: :true

  def full_name
    "#{first_name} #{last_name}"
  end
end
