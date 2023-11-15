interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Business',
  applicationName: 'Hail',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage business information',
    'Manage user accounts',
    'Manage weather alerts',
    'Manage user preferences',
    'Manage locations',
    'Manage weather data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/92f44c3f-417d-4bfa-ba7c-e902b47797d5',
};
