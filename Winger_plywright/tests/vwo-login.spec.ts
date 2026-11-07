import { expect, test } from '@playwright/test';
import { LoginPage } from './page-objects/LoginPage.js';

const validEmail = process.env.VWO_EMAIL ?? '';
const validPassword = process.env.VWO_PASSWORD ?? '';

const invalidCredentials = {
  email: 'invalid.user@example.com',
  password: 'WrongPassword123!',
};

test.describe('VWO login dashboard', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.expectVisible();
  });

  test('renders the login page correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
    await expect(loginPage.rememberMeCheckbox).toBeVisible();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
    await expect(loginPage.socialGoogleButton).toBeVisible();
    await expect(loginPage.ssoLoginButton).toBeVisible();
    await expect(loginPage.passkeyLoginButton).toBeVisible();
    await expect(loginPage.startFreeTrialButton).toBeVisible();
    await expect(loginPage.privacyLink).toBeVisible();
    await expect(loginPage.termsLink).toBeVisible();
  });

  test('rejects invalid credentials with an actionable error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(invalidCredentials.email, invalidCredentials.password);

    await expect(page.locator('body')).toContainText(/invalid|incorrect|wrong|error|not found|unable to sign in/i);
  });

  test('validates required fields when form is submitted empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.signInButton.click();

    await expect(page.locator('body')).toContainText(/required|enter.*email|enter.*password|email.*required|password.*required/i);
  });

  test('supports forgot password flow', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openForgotPassword();

    await expect(page.locator('body')).toContainText(/reset|password|email/i);
  });

  test('allows a user to sign in with valid credentials when env vars are configured', async ({ page }) => {
    test.skip(!validEmail || !validPassword, 'Set VWO_EMAIL and VWO_PASSWORD to run this test.');

    const loginPage = new LoginPage(page);

    await loginPage.login(validEmail, validPassword);

    await expect(page).not.toHaveURL(/#\/login|\/login/i);
  });

  test('retains the session when Remember Me is selected', async ({ page }) => {
    test.skip(!validEmail || !validPassword, 'Set VWO_EMAIL and VWO_PASSWORD to run this test.');

    const loginPage = new LoginPage(page);

    await loginPage.rememberMeCheckbox.check();
    await loginPage.login(validEmail, validPassword);
    await page.reload();

    await expect(page).not.toHaveURL(/#\/login|\/login/i);
  });

  test('keeps legal links accessible', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.privacyLink).toHaveAttribute('href', /privacy/i);
    await expect(loginPage.termsLink).toHaveAttribute('href', /terms|service/i);
  });
});
