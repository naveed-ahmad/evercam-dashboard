# This is ugly:
# The data below could be retrieved from Stripe but there will also be information needed for add ons, which cannot be easily returned from Stripe
class ProductSelector
  attr_reader :evercam_free, :evercam_free_annual,
              :evercam_pro, :evercam_pro_annual,
              :evercam_pro_plus, :evercam_pro_plus_annual

  def initialize product_id
    @product_id = product_id

    @evercam_free = { product_id: 'evercam-free', type: 'plan', name: 'Evercam Free', price: 0, interval: 'month' }
    @evercam_free_annual = { product_id: 'evercam-free-annual', type: 'plan', name: 'Evercam Free Annual', price: 0, interval: 'year' }

    @evercam_pro = { product_id: 'evercam-pro', type: 'plan', name: 'Evercam Pro Monthly', price: 1000, interval: 'month' }
    @evercam_pro_annual = { product_id: 'evercam-pro-annual', type: 'plan', name: 'Evercam Pro Annual', price: 10000, interval: 'year' }

    @evercam_pro_plus = { product_id: 'evercam-pro-plus', type: 'plan', name: 'Evercam Pro Plus Monthly', price: 2000, interval: 'month' }
    @evercam_pro_plus_annual = { product_id: 'evercam-pro-plus-annual', type: 'plan', name: 'Evercam Pro Plus Annual', price: 20000, interval: 'year' }

    @snapmail = { product_id: 'snapmail', type: 'add_on', name: 'Snapmail', price: 1000, interval: 'month' }
    @snapmail_annual = { product_id: 'snapmail-annual', type: 'add_on', name: 'Snapmail', price: 10000, interval: 'year' }

    @timelapse = { product_id: 'timelapse', type: 'add_on', name: 'Timelapse', price: 1000, interval: 'month' }
    @timelapse_annual = { product_id: 'timelapse-annual', type: 'add_on', name: 'Timelapse', price: 10000, interval: 'year' }

    @seven_days_recording = { product_id: '7-days-recording', type: 'add_on', name: '7 Days Recording', price: 1000, interval: 'month' }
    @seven_days_recording_annual = { product_id: '7-days-recording-annual', type: 'add_on', name: '7 Days Recording Annual', price: 10000, interval: 'year' }

    @thirty_days_recording = { product_id: '30-days-recording', type: 'add_on', name: '30 Days Recording', price: 2000, interval: 'month' }
    @thirty_days_recording_annual = { product_id: '30-days-recording-annual', type: 'add_on', name: '30 Days Recording Annual', price: 20000, interval: 'year' }

    @ninety_days_recording = { product_id: '90-days-recording', type: 'add_on', name: '90 Days Recording', price: 3000, interval: 'month' }
    @ninety_days_recording_annual = { product_id: '90-days-recording-annual', type: 'add_on', name: '90 Days Recording Annual', price: 30000, interval: 'year' }

    @restream = { product_id: 'restream', type: 'add_on', name: 'Restream', price: 1000, interval: 'month' }
    @restream_annual = { product_id: 'restream-annual', type: 'add_on', name: 'Restream Annual', price: 10000, interval: 'year' }
  end

  # Used by the line_items_controller to have the necessary data to calculate a total, and display other data.
  def product_params
    case @product_id
      when "evercam-free"
        @evercam_free
      when "evercam-free-annual"
        @evercam_free_annual
      when "evercam-pro"
        @evercam_pro
      when "evercam-pro-annual"
        @evercam_pro_annual
      when "evercam-pro-plus"
        @evercam_pro_plus
      when "evercam-pro-plus-annual"
        @evercam_pro_plus_annual
      when "snapmail"
        @snapmail
      when "snapmail-annual"
        @snapmail_annual
      when "timelapse"
        @timelapse
      when "timelapse-annual"
        @timelapse_annual
      when "7-days-recording"
        @seven_days_recording
      when "7-days-recording-annual"
        @seven_days_recording_annual
      when "30-days-recording"
        @thirty_days_recording
      when "30-days-recording-annual"
        @thirty_days_recording_annual
      when "90-days-recording"
        @ninety_days_recording
      when "90-days-recording-annual"
        @ninety_days_recording_annual
      when "restream"
        @restream
      when "restream-annual"
        @restream_annual
    end
  end
end