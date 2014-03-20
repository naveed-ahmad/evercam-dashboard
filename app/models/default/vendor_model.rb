module Default
  class VendorModel < DbBase
    self.table_name = 'vendor_models'
    self.inheritance_column = 'ruby_type'
    self.primary_key = 'id'

    if ActiveRecord::VERSION::STRING < '4.0.0' || defined?(ProtectedAttributes)
      attr_accessible :created_at, :updated_at, :vendor_id, :name, :config, :known_models
    end

    belongs_to :vendor, :foreign_key => 'vendor_id', :class_name => 'Vendor'
  end
end