FactoryGirl.define do
   factory :user do
      to_create {|instance| instance.save}

      forename "John"
      lastname "Smith"
      sequence(:username) {|n| "user#{n}"}
      password "password"
      sequence(:email) {|n| "user#{n}@nowhere.com"}
      api_id SecureRandom.hex(10)
      api_key SecureRandom.hex(10)
      created_at Time.now - 86400
      updated_at Time.now - 86400
      country do
         country = Country.where(iso3166_a2: 'ie').first
         country || create(:ireland)
      end

      factory :pending_user do
         confirmed_at nil
      end

      factory :active_user do
         confirmed_at Time.now - 86400
      end
   end
end