import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly forgotPasswordLink: Locator;
  readonly socialGoogleButton: Locator;
  readonly ssoLoginButton: Locator;
  readonly passkeyLoginButton: Locator;
  readonly startFreeTrialButton: Locator;
  readonly privacyLink: Locator;
  readonly termsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#login-username').first();
    this.passwordInput = page.locator('#login-password').first();
    this.signInButton = page.getByRole('button', { name: /sign in/i }).first();
    this.rememberMeCheckbox = page.getByText('Remember me').first();
    this.forgotPasswordLink = page.getByRole('button', { name: /forgot password/i }).first();
    this.socialGoogleButton = page.getByRole('button', { name: /sign in with google/i }).first();
    this.ssoLoginButton = page.getByRole('button', { name: /sign in using sso/i }).first();
    this.passkeyLoginButton = page.getByRole('button', { name: /sign in with passkey/i }).first();
    this.startFreeTrialButton = page.getByRole('link', { name: /start a free trial/i }).first();
    this.privacyLink = page.getByRole('link', { name: /privacy policy/i }).first();
    this.termsLink = page.getByRole('link', { name: /terms/i }).first();
  }

  async goto() {
    await this.page.goto('https://app.wingify.com/#/login');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1000);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async openForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async expectVisible() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }
}
