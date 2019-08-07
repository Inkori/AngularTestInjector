export interface Package {
  applicability_filter: ApplicabilityFilter[];
  package_description: string;
  package_handler: string;
  package_id: string;
  package_name: string;
  package_publisher: string;
  package_type: string;
  package_version: string;
  url: string;
}

interface ApplicabilityFilter {
  brand: string;
  country: string;
  default: true;
  family: string;
  language: string;
  mfr: string;
  mt: string;
  mtm: string;
  os_bitness: string;
  os_version_equal: string;
  os_version_lessthan: string;
  sub_brand: string;
  tag: string;
  version_equal: string;
  version_lessthan: string;
}
