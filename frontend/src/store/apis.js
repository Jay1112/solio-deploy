// Backend APIs

export const AuthAPI = {
  signIn: "/v1/auth/login",
  signUp: "/v1/auth/register",
  signOut: "/v1/auth/logout",
  verifyOtp: "/v1/auth/verify-otp",
};

export const UserAPI = {
  session: "/v1/user/details",
  personalInfo: "/v1/user/personal-info",
};

export const SocialsAPI = {
  platforms: "/v1/socials/platforms",
  userSocials: "/v1/socials/user-platforms",
  createSocial: "/v1/socials/create",
  updateSocial: "/v1/socials/update-social/",
  deleteSocial: "/v1/socials/delete-social/",
};

export const PersonalizedAPI = {
  personalizations: "/v1/personalize/all",
  personalizationTypes: "/v1/personalize/types",
};
