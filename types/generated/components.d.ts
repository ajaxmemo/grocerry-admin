import type { Schema, Struct } from '@strapi/strapi';

export interface AddressDetailsAddressDetails extends Struct.ComponentSchema {
  collectionName: 'components_address_details_address_details';
  info: {
    displayName: 'address_details';
  };
  attributes: {
    apartment: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    first_name: Schema.Attribute.String;
    house: Schema.Attribute.String;
    last_name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    post_code: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address-details.address-details': AddressDetailsAddressDetails;
    }
  }
}
