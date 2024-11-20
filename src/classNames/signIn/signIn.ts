import classNames from 'classnames';

import styles from '@/styles/pages/signIn.module.scss';
import signStyles from '@/components/auth/SignInBanner/SignInBanner.module.scss';
import signFormStyles from '@/components/auth/SingInForm/SignInForm.module.scss';

export const containerClassNames = {
  container: styles['signInContainer'],
};

export const signInBannerContainerClassNames = {
  signInBanner: signStyles['signInBanner'],
  signInBannerContainer: signStyles['signInBannerContainer'],
  signInBannerLogo: signStyles['signInBannerLogo'],
  logo: signStyles['signInBannerLogoIcon'],
  title: signStyles['signInBannerTitle'],
  subtitle: signStyles['signInBannerSubtitle'],
  illustration: signStyles['signInBannerIllustration'],
};

export const signInFormContainerClassNames = {
  signInForm: signFormStyles['signInFormBlock'],
  signFormContainer: signFormStyles['signInFormBlockContainer'],
  form: signFormStyles['signInForm'],
  formTitle: signFormStyles['signInFormBlockTitle'],
  input: signFormStyles['signInFormBlockInput'],
  container: signFormStyles['signInFormBlockInputContainer'],
  label: signFormStyles['signInFormBlockLabel'],
  icon: signFormStyles['signInFormBlockViewIcon'],
  remember: signFormStyles['signInFormBlockRemember'],
  rememberContainer: signFormStyles['signInFormBlockRememberContainer'],
  rememberLabel: signFormStyles['signInFormBlockRememberLabel'],
  rememberCheckbox: signFormStyles['signInFormBlockRememberCheckbox'],
  forgotPassword: signFormStyles['signInFormBlockForgotButton'],
  signInSubmit: signFormStyles['signInFormBlockSubmit'],
  signInButton: signFormStyles['signInFormBlockButton'],
  signInAccount: signFormStyles['signInFormBlockAccount'],
};

export const container = classNames(containerClassNames.container);

export const singInBanner = classNames(
  signInBannerContainerClassNames.signInBanner
);
export const signInBannerContainer = classNames(
  signInBannerContainerClassNames.signInBannerContainer
);

export const signInBannerLogo = classNames(
  signInBannerContainerClassNames.signInBannerLogo
);
export const logo = classNames(signInBannerContainerClassNames.logo);
export const title = classNames(signInBannerContainerClassNames.title);
export const subtitle = classNames(signInBannerContainerClassNames.subtitle);
export const illustration = classNames(
  signInBannerContainerClassNames.illustration
);

export const signInFormBlock = classNames(
  signInFormContainerClassNames.signInForm
);
export const signFormContainer = classNames(
  signInFormContainerClassNames.signFormContainer
);
export const signInForm = classNames(signInFormContainerClassNames.form);
export const signInFormBlockTitle = classNames(
  signInFormContainerClassNames.formTitle
);
export const input = classNames(signInFormContainerClassNames.input);
export const inputContainer = classNames(
  signInFormContainerClassNames.container
);
export const label = classNames(signInFormContainerClassNames.label);
export const inputIcon = classNames(signInFormContainerClassNames.icon);
export const rememberBlock = classNames(signInFormContainerClassNames.remember);
export const rememberCheckbox = classNames(
  signInFormContainerClassNames.rememberCheckbox
);
export const forgotPassword = classNames(
  signInFormContainerClassNames.forgotPassword
);
export const rememberContainer = classNames(
  signInFormContainerClassNames.rememberContainer
);
export const rememberLabel = classNames(
  signInFormContainerClassNames.rememberLabel
);
export const signInSubmit = classNames(
  signInFormContainerClassNames.signInSubmit
);
export const signInButton = classNames(
  signInFormContainerClassNames.signInButton
);
export const signInAccount = classNames(
  signInFormContainerClassNames.signInAccount
);
