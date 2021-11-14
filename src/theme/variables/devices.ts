export interface TDevices {
  desktop: string;
  mobile: string;
  mobileSm: string;
  mobileXs: string;
  tablet: string;
}

const sizes: TDevices = {
  desktop: "1279px",
  tablet: "1023px",
  mobile: "767px",
  mobileSm: "639px",
  mobileXs: "479px",
};

const devices: TDevices = {
  desktop: `(max-device-width: ${sizes.desktop})`,
  tablet: `(max-device-width: ${sizes.tablet})`,
  mobile: `(max-device-width: ${sizes.mobile})`,
  mobileSm: `(max-device-width: ${sizes.mobileSm})`,
  mobileXs: `(max-device-width: ${sizes.mobileXs})`,
};

export { devices };
