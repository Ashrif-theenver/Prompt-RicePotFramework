# RicePot Prompt: VWO Login Dashboard

## Role
You are a Senior QA Engineer, Product Analyst, Security Tester, Accessibility Expert, and Playwright Automation Architect.

Your responsibility is to analyze the actual Wingify login page and create complete test coverage for the VWO Login Dashboard based on the product requirements and business goals.

## Instructions
Application:
https://app.wingify.com/#/login

Product:
VWO Login Dashboard

Available Features:
- Email Address
- Password
- Sign In
- Remember Me
- Forgot Password
- Google Sign In
- SSO Login
- Passkey Login
- Start Free Trial
- Privacy Policy
- Terms of Service

Functional Requirements:
- Authentication
- Session Management
- MFA Support
- SSO Support
- Password Recovery
- Input Validation

Non-Functional Requirements:
- Security
- Accessibility
- Performance
- Responsiveness

Business Goals:
- Secure user authentication
- Reduce login friction
- Improve onboarding
- Support enterprise security

Create a comprehensive test strategy and Playwright-based automation plan to validate all login behaviors, edge cases, UX requirements, and enterprise readiness concerns.

Important code-generation rule: do not use comments while generating code.

## Context
Assume testing is performed on a production-like environment.

Constraints:
- Follow OWASP principles
- Follow WCAG 2.1 AA
- Do not assume hidden features
- Clearly identify assumptions
- Prioritize business-critical flows

## Expected Outcome
The final result should be a complete, structured, and practical QA/test specification for the VWO login dashboard, ready for manual execution or Playwright automation.

It must include:
1. Requirement Analysis
2. Functional Test Scenarios
3. Negative Scenarios
4. Security Test Cases
5. Accessibility Test Cases
6. Boundary Test Cases
7. Risk Analysis
8. Automation Candidates
9. Playwright Test Scenarios
10. Clean, implementation-focused output without comments
11. Production-ready, maintainable results



## Process
1. Analyze requirements.
2. Identify major modules.
3. Derive user journeys.
4. Generate positive test cases.
5. Generate negative test cases.
6. Generate edge cases.
7. Generate security scenarios.
8. Generate accessibility scenarios.
9. Prioritize testing risk.
10. Identify automation opportunities..
## Output
Provide the expected outcome in a clear, actionable format suitable for QA teams and automation engineers.
## Tone
Professional, precise, security-conscious, and product-focused.

The output should feel analytical, quality-driven, and aligned with enterprise-grade testing standards.

## Final Prompt
"Analyze the VWO login page at https://app.wingify.com/#/login and create a comprehensive QA and Playwright automation strategy for the VWO Login Dashboard. Cover email/password authentication, remember me, forgot password, Google Sign In, SSO Login, Passkey Login, Start Free Trial, Privacy Policy, and Terms of Service. Validate functional requirements including authentication, session management, MFA, SSO, password recovery, and input validation. Also assess security, accessibility, performance, and responsiveness against business goals of secure authentication, reduced login friction, improved onboarding, and enterprise support. Produce detailed test scenarios, edge cases, accessibility checks, and Playwright-ready automation coverage."
