Airbrake.configure do |config|
  config.api_key = '61fea9c916a4f43f5f2c2e882b1f2983'
  config.ignore << 'Evercam::CameraOfflineError'
  config.ignore << 'Evercam::NotFoundError'
  config.ignore << 'Evercam::EvercamError'
end
