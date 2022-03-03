import { PaidFeature } from '../types/models';

const hasFeature = (
  feature: PaidFeature['name'],
  features: PaidFeature[] = []
) => {
  return !!features.find(f => f.name === feature);
};

export default hasFeature;
