# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(first_name: 'Przemyslaw', last_name: 'Markowski', email: 'pmarkowski@alaraby.tv', admin: true, password: ENV['ALARABY_EMAIL_PASSWORD'], password_confirmation: ENV['ALARABY_EMAIL_PASSWORD'], confirmation_token: SecureRandom.hex(16), confirmation_sent_at: DateTime.now, confirmed_at: DateTime.now)